import * as types from "./types";

const searchReducer = (state = [], action) => {
    switch(action.type) {
        case types.SEARCH_RESULTS:
            return { ...state, currentTime: action.payload};
        default:
            return state;
    }
}

export default searchReducer