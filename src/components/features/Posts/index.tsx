import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Header, Loader } from "../../common";
import styles from "./styles";

/**
 * Type of posts component
 */

type PostsProps = {
  posts: {
    body: string;
    id: number;
    reactions: number;
    tags: string[];
    title: string;
    userId: number;
  }[];
};

const Posts = () => {
  const [posts, setPosts] = useState<PostsProps>(); // state to store all the posts

  /**
   * Function to fetch data from the API and set it into the state.
   */

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    setPosts(response.data);
  };

  /**
   * Ensures that fetchData() is only called once when the component mounts.
   */

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Header />
      {posts?.posts ? (
        <Box sx={styles.cardWrapper}>
          {posts?.posts?.map(({ body, id, reactions, tags, title }) => {
            return (
              <Card
                id={id}
                title={title}
                body={body}
                tags={tags}
                reactions={reactions}
                customStyles={styles.card}
              />
            );
          })}
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Posts;
