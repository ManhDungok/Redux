import { INCREMENT, DECREMENT } from '../action/types';


const INITIAL_STATE = {

    count: 0,
    name: 'hihi'
};

const counterReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT:

            return {

                ...state, count: state.count + 1,

            };

        case DECREMENT:

            return {
                ...state, count: state.count - 1,

            };

        default: return state;

    }

};

export default counterReducer;