import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    padding: "3% 0%",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "auto",
    transition: "all 400ms ease",
  },

  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 1000,
    rowGap: "26px",
    columnGap: "32px",
  },

  card: {
    flexBasis: {
      xs: "80%",
      sm: "42%",
      md: "26%",
    },
  },
};

export default styles;
