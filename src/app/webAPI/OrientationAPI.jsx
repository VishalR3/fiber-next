import { Card, CardContent } from "@mui/material";
import Compass from "../compass";

export default function OrientationAPI() {
  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <h5>Orientation</h5>
          {<Compass />}
        </div>
      </CardContent>
    </Card>
  );
}
