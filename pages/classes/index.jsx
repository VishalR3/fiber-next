import { style } from "@mui/system";
import dynamic from "next/dynamic";
import styles from "../../styles/Classes.module.css";

const CanvasComponent = dynamic(
  () => import("../../src/classes/CanvasComponent"),
  {
    ssr: false,
  }
);

const Classes = () => {
  return (
    <>
      <div className={styles.canvasArea}>
        <CanvasComponent />
      </div>
    </>
  );
};

export default Classes;
