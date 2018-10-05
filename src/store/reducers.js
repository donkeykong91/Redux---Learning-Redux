import C from "../constants";

export const goal = function(state=10, action) {

  if (action.type === C.SET_GOAL) {

    return Number(action.payload);

  } else {

    return state;

  }

};
