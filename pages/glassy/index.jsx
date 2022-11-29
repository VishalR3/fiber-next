import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import Background from "../../src/glassy/background";

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
                  <Grid item md={6}>
                    <GlassyCard sx={{ minHeight: "300px", height: "100%" }}>
                      <CardContent>
                        <h1>
                          Hii I am
                          <span className="text-primary"> Vishal Rana</span>
                        </h1>
                      </CardContent>
                    </GlassyCard>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={3}>
                      <Grid item md={6}>
                        <GlassyCard>
                          <CardContent>
                            <h5>
                              Hii I am
                              <span className="text-primary"> Vishal Rana</span>
                            </h5>
                          </CardContent>
                        </GlassyCard>
                      </Grid>
                      <Grid item md={6}>
                        <GlassyCard>
                          <CardContent>
                            <h5>
                              Hii I am
                              <span className="text-primary"> Vishal Rana</span>
                            </h5>
                          </CardContent>
                        </GlassyCard>
                      </Grid>
                      <Grid item md={6}>
                        <GlassyCard>
                          <CardContent>
                            <h5>
                              Hii I am
                              <span className="text-primary"> Vishal Rana</span>
                            </h5>
                          </CardContent>
                        </GlassyCard>
                      </Grid>
                      <Grid item md={6}>
                        <GlassyCard>
                          <CardContent>
                            <h5>
                              Hii I am
                              <span className="text-primary"> Vishal Rana</span>
                            </h5>
                          </CardContent>
                        </GlassyCard>
                      </Grid>
                    </Grid>
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
