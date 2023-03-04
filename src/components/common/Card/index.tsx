import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StyleIcon from "@mui/icons-material/Style";
import { Box, SxProps } from "@mui/material";
import styles from "./styles";

/**
 * Type of card (Only this type of data can be stored inside card)
 */

type CardProps = {
  title: string;
  body: string;
  tags: string[];
  id: number;
  reactions: number;
  customStyles?: SxProps;
};

const Card = ({
  title,
  body,
  tags,
  id,
  reactions,
  customStyles,
}: CardProps) => {
  return (
    <Box sx={{ ...styles.card, ...customStyles } as SxProps}>
      <Box sx={styles.title}>{title}</Box>
      <Box sx={styles.description}>{body}</Box>
      <Box sx={styles.tagsWrapper}>
        <StyleIcon sx={styles.tagIcon} />
        <Box sx={styles.tagsContainer}>
          {tags.map((item, index) => (
            <Box key={index} sx={styles.tag}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={styles.divider} />
      <Box sx={styles.bottonContent}>
        <Box sx={styles.postIdNumber}>
          <Box component="span" sx={styles.postId}>
            Post Id :
          </Box>{" "}
          {id}
        </Box>
        <Box sx={styles.reactionWrapper}>
          <FavoriteBorderIcon sx={styles.reactionIcon} /> {reactions}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
