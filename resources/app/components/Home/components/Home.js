import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TweetList from "./TweetList";


const Home = ({ tweets, isFetching }) => (
    <div>
        <Header />
        <TweetList tweets={tweets} isFetching={isFetching} />
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