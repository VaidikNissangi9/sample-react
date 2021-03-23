import { v4 as uuid } from "uuid";

export const initialState = {
  items: [
    { id: uuid(), text: "Petrol", amount: 100 },
    { id: uuid(), text: "Books", amount: 800 },
    { id: uuid(), text: "House Rent", amount: 18000 }
  ]
};

export default (state = initialState, action = { type: "" }) => {

  if (action.type === "SAVE_ITEM") {
    return {
      ...state,
      items: [...state.items, action.payload]
    };
  }

  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload)
    };
  }
  return initialState;
};
