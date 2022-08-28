import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import { FC, useState } from "react";
import imageLoader from "../imageLoader";

import { sha256 } from "js-sha256";
import { Loading } from "../components/Loading";
import { GithubCorner } from "../components/GithubCorner";

const metranet = require("../lib/metranet.json");
const unipanca = require("../lib/unipanca.json");

const dbs = [metranet, unipanca];

const isNik = (id: string) => {
  return /^\d{16}$/.test(id);
};

const isIPv4 = (ip: string) => {
  return /\d*\.\d*\.\d*\.\d*/.test(ip);
};

const isEmail = (email: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const Home: NextPage = () => {
  const [leaked, setLeaked] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [kind, setKind] = useState<string>("");
  const [leakFrom, setLeakFrom] = useState<string[]>([]);

  const checkInput = (e: any) => {
    const query = e.target.value.trim();

    if (e.key === "Backspace") {
      if (query === "") {
        setLeaked(0);
        setLoading(false);
        return;
      }
    }

    if (e.key === "Enter") {
      if (query === "") {
        setLeaked(0);
        setLoading(false);
        return;
      }

      setLeaked(0);
      setLeakFrom([]);
      setKind("Nama");

      setQuery(query);

      setLoading(true);
      const hash = sha256(query.toLowerCase());

      if (isNik(query)) {
        setKind("No KTP");
      }
      if (isIPv4(query)) {
        setKind("No IP");
      }
      if (isEmail(query)) {
        setKind("Email");
      }

      setTimeout(() => {
        setLoading(false);
        let _leaked = 2;
        let leakedFrom = [];
        for (var i = 0; i < dbs.length; i++) {
          const db = dbs[i];
          if (db.hashes.indexOf(hash) > -1) {
            _leaked = 1;
            leakedFrom.push(db.name);
          }
        }
        setLeakFrom(leakedFrom);
        setLeaked(_leaked);
      }, 500);
    }
  };

  return (
    <div>
      <Head>
        <title>Leak Checker</title>
        <meta
          name="description"
          content="Website to check is your personal data has been leaked."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <GithubCorner />
      <main className={`${styles.main} text-center flex flex-col items-center`}>
        <h1 className="font-semibold">Apakah data pribadi Anda bocor?</h1>
        <h2>Coba periksa di sini</h2>
        <h2>You are offline!</h2>

        <div className="w-96 pt-10">
          <p>Periksa:</p>
          <input
            className="shadow appearance-none border rounded w-full pl-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="query"
            type="text"
            placeholder="Bisa berupa nama lengkap, No KTP, atau email"
            onKeyUp={checkInput}
            onClick={(e: any) => e.target.select()}
          ></input>
        </div>
        <div className="flex flex-col">
          {loading && <Loading className={"pt-10"} />}
          {leaked === 1 && (
            <div className="pt-5 flex flex-col items-center text-center">
              <div className="text-xl font-bold">LEAK!</div>
              <Image
                src="leak.jpg"
                alt="Leak Bali"
                width={200}
                height={250}
                loader={imageLoader}
              />
              <div className="pl-10 pr-10">
                {kind}{" "}
                <span className="font-semibold">&quot;{query}&quot;</span>{" "}
                muncul di:
                <ul className="text-red-500 pt-2 text-left">
                  {leakFrom.map((leak, i) => (
                    <li key={i}>
                      {i + 1}. {leak}.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {leaked === 2 && (
            <div className="text-xl font-bold text-green-600 pt-5 flex flex-col items-center text-center">
              <Image
                src="checkmark-icon.svg"
                alt="checkmark"
                width={100}
                height={100}
                loader={imageLoader}
              />
              <div>AMAN</div>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="flex flex-col items-center pt-10">
          <p className="p-10 text-center md:w-2/3 bg-green-100 md:rounded-xl">
            Website ini statis bisa bekerja tanpa koneksi internet sehingga aman
            tidak ada informasi yang keluar, semua pemeriksaan dilakukan di
            lokal (browser) tanpa data sumber menggunakan konsep{" "}
            <a
              className="link"
              href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
              target="_blank"
              rel="noreferrer"
            >
              zero-knowledge proof (ZKP)
            </a>
            .
          </p>
          <p className="p-10">
            Kode sumber website ini terbuka dan bisa didapatkan di{" "}
            <a className="link" href="https://github.com/anvie/leak-checker">
              Github
            </a>
          </p>
          <div className="pt-10 pb-10 text-center">
            Copyleft &copy; 2022 Robin Syihab |{" "}
            <a className="link" href="https://twitter.com/anvie">
              @anvie
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
