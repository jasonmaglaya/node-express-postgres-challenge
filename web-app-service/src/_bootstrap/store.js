import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import toDoReducer from "../ToDo/ToDoReducer";

export default function configureStore(initialState = {}) {
  const reducers = combineReducers({
    toDo: toDoReducer,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
}
