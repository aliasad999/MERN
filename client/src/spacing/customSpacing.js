import { makeStyles } from "@material-ui/core";

const spacingMap = {
  t: "Top", //marginTop
  b: "Bottom",//marginBottom
  l: "Left",//marginLeft
  r: "Right",//marginRight
  a: "", //margin (all around)
};

const Margin = (d, x) => {
  const useStyles = makeStyles(() => ({
    margin: () => {
      // margin in x-axis(left/right both)
      if (d === "x") {
        return {
          marginLeft: `${x}px`,
          marginRight: `${x}px`
        };
      }
      // margin in y-axis(top/bottom both)
      if (d === "y") {
        return {
          marginTop: `${x}px`,
          marginBottom: `${x}px`
        };
      }
      return { [`margin${spacingMap[d]}`]: `${x}px` };
    }
  }));
  const classes = useStyles();
  const { margin } = classes;
  return margin;
};

const Padding = (d, x) => {
  const useStyles = makeStyles(() => ({
    padding: () => {
      if (d === "x") {
        return {
          paddingLeft: `${x}px`,
          paddingRight: `${x}px`
        };
      }
      if (d === "y") {
        return {
          paddingTop: `${x}px`,
          paddingBottom: `${x}px`
        };
      }
      return { [`padding${spacingMap[d]}`]: `${x}px` };
    }
  }));
  const classes = useStyles();
  const { padding } = classes;
  return padding;
};

const customSpacing = () => {
  return {
    m: Margin,
    p: Padding,
    y: Margin
  };
};

export default customSpacing;