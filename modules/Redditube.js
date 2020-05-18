/**
 * @name Redditube
 * @version 1.0.0
 * 
 * From posts and comments on Reddit
 * to a video uploaded on Youtube!
 * 
 * @copyright (C) 2020 by Charly Poirier
*/
const Reddit = require(`./Reddit.js`);
const Image = require(`./Image.js`);
const Sound = require(`./Sound.js`);
const Video = require(`./Video.js`);
const YouTube = require(`./YouTube.js`);

module.exports = {

    make: async (subreddit, count, sort=`top`, time=`all`) => {
        let post = await Reddit.fetchPost(subreddit, sort, time);
        let comments = await Reddit.fetchComments(subreddit, post.id, count);
        //await Image.generate(post, comments);
        //await Sound.generate(post, comments);
        await Video.generate(post, comments);
    },

    upload: async (title, description) => {
        YouTube.upload();
    }

};