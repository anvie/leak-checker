import imageLoader from "../imageLoader";
import Image from "next/image";
import styles from "../styles/Home.module.sass";

export const GithubCorner = () => {
  return (
    <a
      href="https://github.com/anvie/leak-checker"
      className={styles.githubCorner}
      aria-label="View source on GitHub"
    >
      <Image
        src="octocat.svg"
        height={100}
        width={100}
        alt="octocat"
        loader={imageLoader}
      />
    </a>
  );
};
