import { FETCH_CARD_DATA } from '../actions/types';

const INITIAL_STATE = { data: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CARD_DATA:
            return { data: action.payload };
        default:
            return state;
    }
};
