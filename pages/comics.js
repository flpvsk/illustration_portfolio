import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar.js";
import { comicsList } from "./comics/data.js";

export default function Comics(props) {
  return (
    <div>
      <h1 className={styles.title}>ale rodriguez</h1>

      <div className={styles.homeLayout}>
        <Navbar />

        {comicsList.map((comic) => {
          return (
            <div className={styles.containerIllustrations}>
              <Link href={`/comics/${comic.id}`} key={comic.id}>
                <button className={styles.wrapper}>
                  <img
                    id="image"
                    className={styles.comic}
                    src={comic.thumbnail}
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
