import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import dynamic from "next/dynamic";

export const GlassyCard = styled(Card)({
  background: "rgba(17,25,40,0.25)",
  // background:
  //   "linear-gradient(-45deg, rgba(0,0,0,0.20) 0%, rgba(17,25,40,0.75) 100%)",
  backdropFilter: "blur(16px) saturate(180%)",
  backgroundBlendMode: "overlay",
  minHeight: "60vh",
  borderRadius: "1.25rem",
  color: "white",
});

export const GradientBorder = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "1.25rem",
  border: "3px solid transparent",
  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  maskComposite: "xor",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.02)) border-box",
});

const CanvasComponent = dynamic(() => import("../../src/p5/CanvasComponent"), {
  ssr: false,
});

const Pfive = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CanvasComponent />
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "10vh",
          }}
        >
          <Box m={5} p={5}>
            <GlassyCard style={{ position: "relative" }}>
              <GradientBorder></GradientBorder>
              <CardContent></CardContent>
            </GlassyCard>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pfive;
