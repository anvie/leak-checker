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

const isNik = (id: string) => {
  return /^\d{16}$/.test(id);
};

const isIPv4 = (ip: string) => {
  return /\d*\.\d*\.\d*\.\d*/.test(ip);
};

const Home: NextPage = () => {
  const [leaked, setLeaked] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [kind, setKind] = useState<string>("");

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
      setKind("Nama");

      setQuery(query.toUpperCase());

      setLoading(true);
      const hash = sha256(query.toLowerCase());

      if (isNik(query)) {
        setKind("No KTP");
      }
      if (isIPv4(query)) {
        setKind("No IP");
      }

      setTimeout(() => {
        setLoading(false);
        setLeaked(metranet.hashes.indexOf(hash) > -1 ? 1 : 2);
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
      </Head>
      <GithubCorner />
      <main className={`${styles.main} text-center flex flex-col items-center`}>
        <h1 className="font-semibold">Apakah histori penelusuranmu bocor?</h1>
        <h2>Coba periksa di sini</h2>

        <div className="w-96 pt-10">
          <p>Periksa:</p>
          <input
            className="shadow appearance-none border rounded w-full pl-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="query"
            type="text"
            placeholder="Bisa berupa nama lengkap atau No KTP"
            onKeyUp={checkInput}
            onClick={(e: any) => e.target.select()}
          ></input>
        </div>
        <div className="flex flex-col">
          {loading && <Loading className={"pt-10"} />}
          {leaked === 1 && (
            <div className="text-red-500 pt-5 flex flex-col items-center text-center">
              <div className="text-xl font-bold">LEAK!</div>
              <Image
                src="leak.jpg"
                alt="Leak Bali"
                width={200}
                height={250}
                loader={imageLoader}
              />
              <p className="pl-10 pr-10">
                {kind} &quot;{query}&quot; muncul di metranet_log data diduga
                milik{" "}
                <a
                  className="link"
                  href="https://bisnis.tempo.co/read/1625593/26-juta-data-indihome-diduga-bocor-telkom-browsing-history-disimpan-sangat-terproteksi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telkom Indihome
                </a>{" "}
                yg bocor.
              </p>
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
            Website ini statis bisa bekerja tanpa koneksi internet sehingga aman tidak ada informasi yang dikirim ke server, semua
            pemeriksaan dilakukan di lokal (browser) tanpa data sumber,
            menggunakan konsep <a className="link" href="https://en.wikipedia.org/wiki/Zero-knowledge_proof" target="_blank" rel="noreferrer">zero-knowledge proof (ZKP)</a>.
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
