import { Box } from "@mui/material";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.headingWrapper}>
      <Box component="img" src="/post.png" sx={styles.postImage} />
      <Box sx={styles.headerText}>Daily Feeds</Box>
    </Box>
  );
};

export default Header;
