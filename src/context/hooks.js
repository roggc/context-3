import {
  useActionsContext,
  useValuesContext,
  INCREMENT,
  DECREMENT,
  EQUAL,
} from ".";

const useCounterActions = () => {
  const dispatch = useActionsContext();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  return { increment, decrement, equal };
};

const useCounterValues = () => {
  const { count } = useValuesContext();
  return { count };
};

export const getCounterHooks = () => ({
  useCounterActions,
  useCounterValues,
});

const useTodosValues = () => {
  const { todos } = useValuesContext();
  return { todos };
};

export const getTodosHooks = () => ({
  useTodosValues,
});
