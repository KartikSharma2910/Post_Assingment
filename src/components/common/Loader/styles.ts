import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    gap: "20px",
  },

  loadingText: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
    },
    color: "#4b384f",
  },
};

export default styles;
