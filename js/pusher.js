const pusher = new Pusher("50ed18dd967b455393ed");

const subredditChannel = pusher.subscribe("askreddit");

subredditChannel.bind("new-listing", function(listing) {
    console.log(listing);
  });

// console.log(subredditChannel)
