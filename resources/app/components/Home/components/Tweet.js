import React from "react";
import PropTypes from "prop-types";


const Tweet = ({ tweet }) => (
    <div className="tweet">
        <div className="tweet-box">
            <div className="tweet-profile-picture">
                <img src={tweet.user.profile_image_url_https} />
            </div>

            <div className="tweet-body">
                <div className="tweet-profile">
                    {tweet.user.name} @{tweet.user.screen_name}
                </div>

                <div className="tweet-message">
                    {tweet.text}
                </div>

                <div className="tweet-time">
                    <small>{tweet.created_at}</small>
                </div>
            </div>
        </div>
    </div>
);


Tweet.propTypes = {
    tweet: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile_image_url_https: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};


export default Tweet;