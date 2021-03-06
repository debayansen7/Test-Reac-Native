import { RECIEVE_ENTRIES, ADD_ENTRY } from '../actions';

const InitialState = []

function entries (state= InitialState, action) {
  switch (action.type){
    case RECIEVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      };

    case ADD_ENTRY:
      return {
        ...state,
        ...action.entries
      };

    default:
      return state;
  }
}

export default entries;
