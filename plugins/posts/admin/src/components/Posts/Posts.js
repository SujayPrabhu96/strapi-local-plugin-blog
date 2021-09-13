import React from "react";
import { Table } from "@buffetjs/core";

const headers = [
  {
    name: "Id",
    value: "id",
  },
  {
    name: "Title",
    value: "title",
  },
  {
    name: "Description",
    value: "description",
  },
  {
    name: "User",
    value: "user_id",
  },
];

const Posts = ({ posts }) => {
  return (
    <div>
      <Table headers={headers} rows={posts} />
    </div>
  );
};

export default Posts;
