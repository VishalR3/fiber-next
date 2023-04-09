import { Button, Card, CardContent } from "@mui/material";

export default function MediaAPI() {
  const openCamera = () => {
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          // Do something with the stream.
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <Button variant="contained" color="primary" onClick={openCamera}>
            Open Camera
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
