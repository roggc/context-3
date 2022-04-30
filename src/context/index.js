import { createContext, useContext as useContext_, useReducer } from "react";

const initialState = { count: 0, todos: [{ text: "todo 1" }] };

const valuesContext = createContext(initialState);
const actionsContext = createContext();
export const useValuesContext = () => useContext_(valuesContext);
export const useActionsContext = () => useContext_(actionsContext);

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const EQUAL = "EQUAL";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case EQUAL:
      return { ...state, count: state.count };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <valuesContext.Provider value={state}>
      <actionsContext.Provider value={dispatch}>
        {children}
      </actionsContext.Provider>
    </valuesContext.Provider>
  );
};

export default ContextProvider;
