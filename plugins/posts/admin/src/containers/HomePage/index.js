import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import { Header } from "@buffetjs/custom";

import Posts from "../../components/Posts/Posts";
import Loader from "../../components/Loader/Loader";

import { structureData } from "../../utils/structureData";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(`${strapi.backendURL}/posts`);
    setPosts(structureData(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <Header title={{ label: "Posts" }} content="List of Posts" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Posts posts={posts} loading={loading} />
        </>
      )}
    </div>
  );
};

export default memo(HomePage);
