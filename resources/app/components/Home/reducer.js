import { HOME_REQUEST_TWEETS, HOME_RECEIVE_TWEETS } from "./actions";

export default (state, action) => {
    switch (action.type) {
        case HOME_REQUEST_TWEETS:
            return {
                ...state,
                isFetching: true
            }
        case HOME_RECEIVE_TWEETS:
            return {
                ...state,
                isFetching: false,
                tweets: action.tweets
            }
        default:
            return state || {
                isFetching: false,
                tweets: []
            }
    }
}