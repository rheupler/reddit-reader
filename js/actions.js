const pusher = new Pusher("50ed18dd967b455393ed");


function getValue() {
  let subredditChannel = document.getElementById("input-box").value;
  alert(subredditChannel);
  subredditChannel.bind("new-listing", function(listing) {
      console.log(`${listing.author} wants to know: ${listing.title}`);
  });
}

//

// function outputValue() {
//   document.getElementById('sub-form').submit(function() {
//     console.log(userVal);
//   })
// }



// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     received_at: Date.now()
//   }
// }
//
// function fetchPosts(subreddit) {
//     return fetch(`https://reddit.com/${subreddit}.json`);
// }
