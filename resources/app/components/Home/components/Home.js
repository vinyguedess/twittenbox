import React from "react";
import PropTypes from "prop-types";
import TweetList from "./TweetList";


const Home = ({ tweets, isFetching }) => (
    <div>
        <TweetList tweets={tweets} isFetching={isFetching} className="tweets-nav" />
    </div>
);


Home.propTypes = {
    isFetching: PropTypes.bool.isRequired,

    tweets: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile_image_url_https: PropTypes.string.isRequired
        }).isRequired
    })).isRequired
};


export default Home;