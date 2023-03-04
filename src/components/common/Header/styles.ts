import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  headingWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "2%",
  },

  postImage: {
    width: {
      xs: "80px",
      sm: "100px",
      md: "120px",
    },
    cursor: "pointer",
  },

  headerText: {
    fontSize: {
      xs: "28px",
      sm: "30px",
      md: "32px",
    },
    color: "#001037",
    wordSpacing: 1.5,
  },
};

export default styles;
