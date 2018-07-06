import React from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";


const TweetList = ({ tweets, isFetching }) => (
    <div>
        {
            !tweets.length && isFetching ?
                <div className="text-center">
                    Carregando tweets
                </div>
                :
                !tweets.length ?
                    <div className="text-center">
                        Nenhum tweet encontrado
                    </div>
                    :
                    tweets.map((tweet, key) => <Tweet key={`nav-tweets-${key}`} tweet={tweet} />)
        }
    </div>
);


TweetList.propTypes = {
    isFetching: PropTypes.bool.isRequired,

    tweets: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile_image_url_https: PropTypes.string.isRequired
        }).isRequired
    })).isRequired
};


export default TweetList;