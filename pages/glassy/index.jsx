import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import Background from "../../src/glassy/background";
import WardrobePreview from "../../src/glassy/WardrobePreview";
import { GlassyCard, GradientBorder } from "../p5";

const Glassy = () => {
  return (
    <>
      <Background>
        <div className="glassy">
          <Box m={5}>
            <GlassyCard>
              <GradientBorder></GradientBorder>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  p={3}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Grid item>
                    <WardrobePreview wardrobe={"Name"} />
                  </Grid>
                </Grid>
              </CardContent>
            </GlassyCard>
          </Box>
        </div>
      </Background>
    </>
  );
};

export default Glassy;
