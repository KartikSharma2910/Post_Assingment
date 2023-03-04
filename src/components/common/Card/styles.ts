import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    cursor: "pointer",
    gap: "15px",
    border: "1px solid rgba(112, 112, 112, 0.35)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    transition: "all 400ms ease",
    minHeight: "350px",
    "&:hover": {
      border: {
        md: "none",
      },
      transform: {
        md: "scale(1.1)",
      },
    },
  },

  title: {
    fontSize: "16px",
    color: "#001037",
  },

  description: {
    lineHeight: 1.5,
    wordSpacing: 1.5,
    height: "190px",
    overflow: "hidden",
    fontSize: "14px",
    color: "rgba(0, 16, 55, 0.6)",
  },

  tagsWrapper: {
    position: "absolute",
    bottom: 65,
    display: "flex",
    gap: "12px",
  },

  tagIcon: {
    color: "#4b384f",
  },

  tagsContainer: {
    display: "flex",
    gap: "10px",
  },

  tag: {
    color: "rgba(0, 16, 55, 0.6)",
    fontSize: "14px",
    border: "1px solid #001037",
    padding: "2px 5px",
    borderRadius: "10px",
    textTransform: "capitalize",
  },

  divider: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(112, 112, 112, 0.35)",
  },

  bottonContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },

  postId: {
    color: "#001037",
    fontSize: "16px",
  },

  postIdNumber: {
    fontSize: "16px",
    color: "rgba(0, 16, 55, 0.6)",
    fontWeight: 500,
  },

  reactionWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  reactionIcon: {
    color: "red",
  },
};

export default styles;
