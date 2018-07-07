import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TweetList from "./TweetList";


const Home = ({ tweets, isFetching, refreshTweets }) => (
    <div>
        <Header />
        <TweetList tweets={tweets} isFetching={isFetching} refreshTweets={refreshTweets} />
    </div>
);


Home.propTypes = {
    refreshTweets: PropTypes.func.isRequired,

    isFetching: PropTypes.bool.isRequired,

    tweets: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile_image_url_https: PropTypes.string.isRequired
        }).isRequired
    })).isRequired
};


export default Home;