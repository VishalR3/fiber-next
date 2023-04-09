import { Card, CardContent, styled } from "@mui/material";
import { useEffect } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import { proxy, useSnapshot } from "valtio";

const Battery = styled("div", {
  shouldForwardProps: (props) => props !== "battery",
})(({ theme, battery }) => ({
  width: "clamp( min(50%,100px), 150px ,max(50%,200px))",
  height: "24px",
  position: "relative",
  border: "2px solid white",
  borderRadius: "4px",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: `${battery.level * 100}%`,
    height: "100%",
    backgroundColor: battery.charging
      ? theme.palette.success.main
      : theme.palette.error.main,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "-7.5px",
    transform: "translateY(-50%)",
    width: "7.5px",
    height: "10px",
    backgroundColor: "white",
    borderRadius: "0 4px 4px 0",
  },
  "& .MuiSvgIcon-root": battery.charging && {
    position: "absolute",
    top: "50%",
    left: `${battery.level * 100}%`,
    transform: "translate(-50%,-50%)",
    zIndex: 1,
  },
}));

const battery = proxy({
  charging: false,
  level: 0,
  chargingTime: 0,
  dischargingTime: 0,
});

function updateChargeInfo(charging) {
  battery.charging = charging;
}

function updateLevelInfo(level) {
  battery.level = level;
}

function updateChargingInfo(chargingTime) {
  battery.chargingTime = chargingTime;
}

function updateDischargingInfo(dischargingTime) {
  battery.dischargingTime = dischargingTime;
}

export default function BatteryAPI() {
  const batterySnap = useSnapshot(battery);
  useEffect(() => {
    navigator.getBattery().then((batteryData) => {
      function updateAllBatteryInfo() {
        updateChargeInfo(batteryData.charging);
        updateLevelInfo(batteryData.level);
        updateChargingInfo(batteryData.chargingTime);
        updateDischargingInfo(batteryData.dischargingTime);
      }
      updateAllBatteryInfo();

      batteryData.addEventListener("chargingchange", () => {
        updateChargeInfo(batteryData.charging);
      });

      batteryData.addEventListener("levelchange", () => {
        updateLevelInfo(batteryData.level);
      });

      batteryData.addEventListener("chargingtimechange", () => {
        updateChargingInfo(batteryData.chargingTime);
      });

      batteryData.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo(batteryData.dischargingTime);
      });
    });
  }, []);
  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <h5>Battery</h5>
          <div className="d-flex justify-content-center my-3">
            <Battery battery={batterySnap}>
              <BoltIcon />
            </Battery>
          </div>
          <table className="table text-white">
            <tbody className="tbody">
              <tr>
                <td>Charging</td>
                <td>{batterySnap.charging ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Level</td>
                <td>{batterySnap.level * 100}%</td>
              </tr>
              {batterySnap.charging ? (
                <tr>
                  <td>Charging Time</td>
                  <td>
                    {batterySnap.chargingTime == "Infinity"
                      ? "Indeterminate"
                      : `${batterySnap.chargingTime / 60} minutes`}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>Discharging Time</td>
                  <td>
                    {batterySnap.dischargingTime == "Infinity"
                      ? "Indeterminate"
                      : `${Math.round(
                          batterySnap.dischargingTime / 60
                        )} minutes`}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
