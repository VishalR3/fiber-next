import { useState } from "react";
import { useRouter } from "next/router";
import Scene from "../src/app/box";
import styles from "../styles/Home.module.css";
import ShareAPI from "../src/app/webAPI/ShareAPI";
import VibrateAPI from "../src/app/webAPI/VibrateAPI";
import OrientationAPI from "../src/app/webAPI/OrientationAPI";
import BatteryAPI from "../src/app/webAPI/BatteryAPI";
import {
  Button,
  Card,
  CardContent,
  MenuItem,
  SwipeableDrawer,
} from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Testing ground for everything web Related</h3>

        <Scene />
        <div className="container">
          <h3 className="text-center mb-5">APIs</h3>
          <div className="row">
            <div className="col-md-3 mb-2">
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={toggleDrawer(true)}
                  >
                    Menu
                  </Button>
                  <SwipeableDrawer
                    anchor={"left"}
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    PaperProps={{
                      style: { minWidth: "150px" },
                    }}
                  >
                    <MenuItem onClick={() => router.push("./classes")}>
                      classes
                    </MenuItem>
                    <MenuItem onClick={() => router.push("./p5")}>p5</MenuItem>
                    <MenuItem onClick={() => router.push("./glassy")}>
                      Glassy
                    </MenuItem>
                  </SwipeableDrawer>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3 mb-2">
              <ShareAPI />
            </div>
            <div className="col-md-3 mb-2">
              <VibrateAPI />
            </div>
            <div className="col-md-3 mb-2">
              <BatteryAPI />
            </div>
            <div className="col-md-3 mb-2">
              <OrientationAPI />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
