import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import { Header } from "@buffetjs/custom";
import Pagination from "../../components/Pagination";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await (await axios.get(`${strapi.backendURL}/posts`)).data;
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ margin: 30 }}>
      <Header title={{ label: "Posts" }} content="List of Posts" />
      <Pagination postsCount={posts.length} />
    </div>
  );
};

export default memo(HomePage);
