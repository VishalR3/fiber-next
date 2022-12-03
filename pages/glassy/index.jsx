import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import Background from "../../src/glassy/background";
import WardrobePreview from "../../src/glassy/WardrobePreview";

const GlassyCard = styled(Card)({
  background: "rgba(17,25,40,0.75)",
  backdropFilter: "blur(16px) saturate(180%)",
  minHeight: "150px",
  borderRadius: "1.25rem",
});

const Glassy = () => {
  return (
    <>
      <Background>
        <div className="glassy">
          <Box m={5}>
            <GlassyCard>
              <CardContent>
                <Grid container spacing={3} p={3}>
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
