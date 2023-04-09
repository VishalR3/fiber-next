import { Button, Card, CardContent } from "@mui/material";

export default function ShareAPI() {
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
  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <Button variant="contained" color="primary" onClick={shareit}>
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
