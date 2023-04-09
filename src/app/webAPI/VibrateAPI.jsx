import { Button, Card, CardContent } from "@mui/material";

export default function VibrateAPI() {
  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 100, 200, 100]);
    } else {
      alert("Does not support vibration " + navigator.platform);
    }
  };
  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <Button variant="contained" color="primary" onClick={vibrate}>
            Vibrate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
