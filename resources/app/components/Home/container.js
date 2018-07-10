import { connect } from "react-redux";
import Home from "./components/Home";
import { fetchTweets } from "./actions";


const mapStateToProps = ({ home }) => ({
    tweets: home.tweets || [],
    isFetching: home.isFetching
});


const mapDispatchToProps = dispatch => 
{
    return {
        loadTweets() 
        {
            dispatch(fetchTweets());
        },
        refreshTweets() 
        {
            dispatch(fetchTweets(true));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);