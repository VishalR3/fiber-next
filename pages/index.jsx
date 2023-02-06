import Scene from "../src/app/box";
import Link from "next/link";
import Compass from "../src/app/compass";
import styles from "../styles/Home.module.css";

export default function Home() {
  const shareData = {
    title: "Vishal Rana",
    text: "Trying the default share of devices, here's my portfolio link",
    url: "https://vishalrana.in",
  };
  const shareit = () => {
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing Not Supported on " + navigator.platform + "!");
    }
  };
  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 100, 200, 100]);
    } else {
      alert("Does not support vibration " + navigator.platform);
    }
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>
          Welcome to <a href="https://nextjs.org">Next.js with Three.js!</a>
        </h3>
        <div className="container">
          <div className="text-center">Pages</div>
          <div className="row">
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <Link className="btn btn-primary" href="/classes">
                    classes
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <Link className="btn btn-primary" href="/p5">
                    p5
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <Link className="btn btn-primary" href="/glassy">
                    Glassy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Scene />
        <div className="container">
          <h3 className="text-center">APIs</h3>
          <div className="row">
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <button className="btn btn-success" onClick={shareit}>
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <button className="btn btn-success" onClick={vibrate}>
                    Vibrate
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.card}>
                <div className="text-center">
                  <h5>Orientation</h5>
                  {<Compass />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
