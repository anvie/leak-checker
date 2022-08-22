import styles from "../styles/Home.module.sass";
import Image from "next/image";
import imageLoader from "../imageLoader";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col place-items-center items-center justify-center pt-10">
        <div className="pt-10 pb-10 text-center">
          Copyright &copy; 2022 Leak Checker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


