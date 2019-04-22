import * as types from "./types";

const modelReducer = (state = [], action) => {
    switch(action.type) {
        case types.NEW_MODEL:
            return { ...state, name: action.payload};
        default:
            return state;
    }
}

export default modelReducer