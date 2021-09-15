"use strict";
const axios = require("axios");

/**
 * posts.js controller
 *
 * @description: A set of functions called "actions" of the `posts` plugin.
 */

module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    const response = await axios.get(`${process.env.JSON_FAKE_API}/posts`);
    return response.data;
  },
};
