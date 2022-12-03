import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sketch from "react-p5";
import {
  ImageContainer,
  SelectWrapper,
  UploadImageBtn,
} from "../../../common/Common";
import { imagePaths } from "../../../config";
import { textFieldConfig } from "./../utils";

class Sections {
  constructor() {
    this.sections = [];
    this.doors = 0;
  }
  addSection(section) {
    this.sections.push(section);
  }
  makeSections(n) {
    if (this.sections.length < n) {
      for (let i = this.sections.length; i < n; i++) {
        let section = new Section();
        this.sections.push(section);
      }
    } else {
      this.sections = this.sections.slice(0, n);
    }
    window.dispatchEvent(new Event("resize"));
  }
  changeAllDoors(doors) {
    this.doors = doors;
    this.sections.forEach((section) => {
      section.doors = doors;
    });
  }
}
class Section {
  constructor() {
    this.doors = 0;
    this.width = 50;
  }
  changeDoors(doors) {
    this.doors = doors;
  }
  changeWidth(width) {
    this.width = width;
  }
}

const WardrobePreview = ({ n, sections }) => {
  const setup = (p5, parentRef) => {
    const cnv = p5.createCanvas(300, 300).parent(parentRef);
    cnv.mouseClicked(() => {
      p5.saveCanvas(cnv, "wardrobe", "jpg");
    });
  };
  const section = (p5, sx, sy, width, i) => {
    p5.rect(sx + i * width, sy, width, 100);
    p5.rect(sx + i * width, sy, width, 20);
    p5.rect(sx + i * width, sy + 20, width, 50);
    p5.rect(sx + i * width + 10, sx + 30, 30, 30);
    p5.rect(sx + i * width, sy + 70, width, 20);
    p5.textAlign(p5.CENTER);
    p5.text(`${i + 1}`, sx + i * width + 25, sy + 50);
  };

  const handle = (p5, sx, sy, h) => {
    p5.line(sx, sy, sx, sy + h);
  };
  const door = (p5, sx, sy, width, i) => {
    let start = sx + i * width;
    p5.rect(start, sy, width, 100);
    p5.line(start, sy + 90, start + width, sy + 90);
    switch (sections.sections[i].doors) {
      case 0:
        handle(p5, start + width - 7, sy + 30, 30);
        break;
      case 1:
        handle(p5, start + 7, sy + 30, 30);
        break;
      case 2:
        handle(p5, start + width / 2 - 7, sy + 30, 30);
        p5.line(start + width / 2, sy, start + width / 2, sy + 90);
        handle(p5, start + width / 2 + 7, sy + 30, 30);
        break;
      default:
        handle(p5, start + width - 7, sy + 30, 30);
        break;
    }
  };

  const draw = (p5) => {
    try {
      p5.background(220);
      let sx = 10,
        sy = 10,
        width = 50;
      for (let i = 0; i < n; i++) {
        section(p5, sx, sy, width, i);
      }
      for (let i = 0; i < n; i++) {
        door(p5, sx, sy + 110, width, i);
      }
    } catch (e) {
      console.log("Canvas Breaking error", e);
    }
  };
  const windowResized = (p5) => {
    p5.resizeCanvas(n * 50 + 20, 230);
  };
  return (
    <>
      <div className="wardrobe-preview">
        <Sketch windowResized={windowResized} setup={setup} draw={draw} />
      </div>
    </>
  );
};

const renderDoorsButtons = (n, sections) => {
  let buttons = [];
  for (let i = 0; i < n; i++) {
    buttons.push(
      <Grid item key={i}>
        <Button
          variant="contained"
          onClick={() => {
            sections.sections[i].changeDoors(
              (sections.sections[i].doors + 1) % 3
            );
          }}
        >
          {i + 1}
        </Button>
      </Grid>
    );
  }
  return buttons;
};

const AddDimensionFormOld = ({
  watch,
  images,
  fields,
  control,
  register,
  setImages,
  submitEvent,
  handleSubmit,
  ...rest
}) => {
  let sections = new Sections();
  const dispatch = useDispatch();

  const no_of_sections = watch("no_of_sections");

  useEffect(() => {
    sections.makeSections(no_of_sections);
  }, [no_of_sections]);

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
      <Grid container mt={3} rowGap={3} alignItems="center">
        {fields.name && (
          <>
            <Grid item md={2}>
              <Typography variant="h4">Name</Typography>
            </Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={6}>
                  <TextField
                    sx={textFieldConfig}
                    fullWidth
                    variant="outlined"
                    // label="Name"
                    // focused
                    {...register("name")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {fields.width && (
          <>
            <Grid item md={2}>
              <Typography variant="h4">Width</Typography>
            </Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={6}>
                  <TextField
                    sx={textFieldConfig}
                    fullWidth
                    variant="outlined"
                    type={"number"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">mm</InputAdornment>
                      ),
                    }}
                    // label="Name"
                    // focused
                    {...register("width")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
        {fields.no_of_sections && (
          <>
            <Grid item md={2}>
              <Typography variant="h4">No. Of Sections</Typography>
            </Grid>
            <Grid item md={10}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    sx={textFieldConfig}
                    fullWidth
                    variant="outlined"
                    type={"number"}
                    defaultValue={0}
                    {...register("no_of_sections")}
                  />
                </Grid>
                <Grid item md={6}>
                  <WardrobePreview n={no_of_sections} sections={sections} />
                  <Grid container spacing={1}>
                    {renderDoorsButtons(no_of_sections, sections)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>

      <Grid container mt={3} rowGap={3} alignItems="center">
        {fields.top_exposed && (
          <>
            <Grid item md={2}>
              <Typography variant="h4">Top Exposed</Typography>
            </Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={6}>
                  <SelectWrapper
                    name="top_exposed"
                    options={[
                      {
                        _id: "No",
                        name: "No",
                      },
                      {
                        _id: "Yes",
                        name: "Yes",
                      },
                    ]}
                    control={control}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}

        {fields.item_code && (
          <>
            <Grid item md={2}>
              <Typography variant="h4">Item Code</Typography>
            </Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={textFieldConfig}
                    // label="Item Code"
                    // focused
                    {...register("item_code")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <Grid container my={4}>
        <Grid item md={7}>
          <Grid container justifyContent="flex-end">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDimensionFormOld;
