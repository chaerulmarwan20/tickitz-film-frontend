const initialState = {
  transactions: [],
};

const orderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_HISTORY":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default orderHistoryReducer;
