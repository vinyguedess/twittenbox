import React from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";


const TweetList = ({ tweets, isFetching, refreshTweets }) => (
    <div className="tweets-nav">
        <div className="tweets-nav-header">
            <button className="refresh-button" onClick={refreshTweets}>
                Refresh
            </button>
        </div>
        {
            !tweets.length && isFetching ?
                <div className="text-center">
                    Loading tweets
                </div>
                :
                !tweets.length ?
                    <div className="text-center">
                        No tweets found
                    </div>
                    :
                    tweets.map((tweet, key) => <Tweet key={`nav-tweets-${key}`} tweet={tweet} />)
        }
    </div>
);


TweetList.propTypes = {
    refreshTweets: PropTypes.func.isRequired,

    isFetching: PropTypes.bool.isRequired,

    tweets: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile_image_url_https: PropTypes.string.isRequired
        }).isRequired
    })).isRequired
};


export default TweetList;