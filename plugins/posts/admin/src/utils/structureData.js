export const structureData = (posts) => {
  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      description: post.body.slice(0, 25),
      user_id: post.userId,
    };
  });
};
