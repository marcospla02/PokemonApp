import { Action } from "../../assets/interfaces/interfaces";

const initialState = {};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
