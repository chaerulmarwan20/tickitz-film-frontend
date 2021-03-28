const initialState = {
  user: [],
  transactions: [],
};

const orderHistoryReducer = (state = initialState, action) => {
  if (action.type === "GET_USER") {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === "GET_ORDER_HISTORY") {
    return {
      ...state,
      transactions: action.payload,
    };
  } else {
    return state;
  }
};

export default orderHistoryReducer;
