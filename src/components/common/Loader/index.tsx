import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Box, CircularProgress } from "@mui/material";
import styles from "./styles";

/**
 * Using MUI circular progress to show loading until data loads
 */

const Loader = () => {
  return (
    <Box sx={styles.loaderWrapper}>
      <CircularProgress size={50} />
      <Box sx={styles.loadingText}>
        <HourglassTopIcon />
        Loading data please wait !
      </Box>
    </Box>
  );
};

export default Loader;
