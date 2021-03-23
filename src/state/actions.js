import { v4 as uuid } from "uuid";

export const saveItem = (text, amount) => ({
  type: "SAVE_ITEM",
  payload: {
    id: uuid(),
    text,
    amount
  }
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  payload: id
});
