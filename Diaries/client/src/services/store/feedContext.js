import { useContext, createContext, useReducer } from "react";

const FeedContext = createContext(null);

const feedReducer = (state, action) => {
  switch (action.type) {
    case "SET_FEEDS":
      return {
        feeds: action.payload,
      };
      break;
    case "CREATE_FEED":
      return {
        feeds: [action.payload, ...state.feeds],
      };

    case "UPDATE_FEED":
      const updatedData = action.payload;
      const oldDataIndex = state.feeds.findIndex(
        (data) => data.dd_id === updatedData.dd_id,
      );
      const updatedFeeds = [...state.feeds];
      updatedFeeds[oldDataIndex] = {
        ...state.feeds[oldDataIndex],
        ...updatedData,
      };

      return {
        feeds: updatedFeeds,
      };

    default:
      return state;
  }
};
export const FeedContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedReducer, {
    feeds: null,
  });

  return (
    <FeedContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);
