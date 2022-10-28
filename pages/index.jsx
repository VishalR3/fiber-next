import Scene from "../src/app/box";
import styles from "../styles/Home.module.css";

export default function Home() {
  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    } else {
      alert("Does not support vibration " + navigator.platform);
    }
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js with Three.js!</a>
        </h1>

        <Scene />
        <div className={styles.grid}>
          <div className={styles.card}>
            <button className="btn btn-success" onClick={vibrate}>
              Vibrate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
