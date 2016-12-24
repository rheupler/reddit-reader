function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit.,
    posts: json.data.children.map(child => child.data),
    received_at: Date.now()
  }
}

function fetchPosts(subreddit) {
    return fetch(`https://reddit.com/${subreddit}.json`);
}
