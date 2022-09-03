
#[macro_use] extern crate lazy_static;

use wasm_bindgen::prelude::*;
use lhash::{LhashParser, hash};

use std::{sync::Mutex, collections::HashMap};

lazy_static! {
    static ref LHASH_DATA:Mutex<HashMap<String, Vec<u64>>> = Mutex::new(HashMap::new());
}

#[wasm_bindgen]
pub fn load_lhash(name:&str, data: &[u8]) -> u32 {
    let mut reader = LhashParser::new(data.to_vec());
    // let mut result = String::new();

    let mut lhash_data = LHASH_DATA.lock().unwrap();
    let mut sigs = vec![];
    let mut count = 0;
    while let Ok(sig) = reader.read() {
        sigs.push(sig);
        count += 1;
    }

    lhash_data.insert(name.to_string(), sigs);

    count
}

#[wasm_bindgen]
pub fn hash_exists(name:&str, value: &str) -> bool {
    let c_hash = hash(&value.to_uppercase());
    let lhash_data = LHASH_DATA.lock().unwrap();
    let sigs = lhash_data.get(name).unwrap();
    sigs.contains(&c_hash)
}
