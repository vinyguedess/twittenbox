import { connect } from "react-redux";
import Home from "./components/Home";
import { fetchTweets } from "./actions";


const mapStateToProps = ({ home }) => ({
    tweets: home.tweets,
    isFetching: home.isFetching
});


const mapDispatchToProps = dispatch => 
{
    dispatch(fetchTweets());
    return {
        refreshTweets()
        {
            dispatch(fetchTweets());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);