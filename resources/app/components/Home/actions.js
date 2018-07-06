import Axios from "axios";


export const fetchTweets = () => dispatch =>
{
    dispatch(requestTweets());
    return Axios.get("/api/tweets")
        .then(({ data }) => dispatch(receiveTweets(data)));
};


export const HOME_REQUEST_TWEETS = "HOME:REQUEST_TWEETS";
const requestTweets = () => ({ type: HOME_REQUEST_TWEETS });


export const HOME_RECEIVE_TWEETS = "HOME:RECEIVE_TWEETS";
const receiveTweets = tweets => ({ type: HOME_RECEIVE_TWEETS, tweets });