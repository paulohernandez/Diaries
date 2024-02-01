import { useState } from "react";
import { useFeed } from "../services/store/feedContext";
import { genericGetRequest } from "../services/api/genericGetRequest";
import { genericUpdateRequest } from "../services/api/genericUpdateRequest";

export default function Status() {
  const { feeds, dispatch } = useFeed();

  const fetchFeeds = async () => {
    const response = await genericGetRequest(
      "http://localhost:4000/api/diaries/",
    );
    dispatch({ type: "SET_FEEDS", payload: response.data });
  };

  const updateCountLikes = async (id) => {
    
    const data = {
      feedId: id,
    };
    const response = await genericUpdateRequest(
      "http://localhost:4000/api/diaries/",
      data,
    );
    dispatch({ type: "UPDATE_FEED", payload: response.data });
  };

  useState(() => {
    fetchFeeds();
  }, []);

  //This is the founder of diaries , Hope that you are doing great !,
  //grinding yourself to become WHAT YOU WANT IN LIFE!
  return (
    <div className="status-mainContainer">
      {feeds &&
        feeds.map((feed) => {
          return (
            <div key={feed.dd_id} className="status-container">
              <div className="status-information">
                <h1>{feed.dd_content}</h1>
              </div>
              <div className="status-react-container">
                <button className={feed.dd_likes > 0 ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                  onClick={() => {
                    updateCountLikes(feed.dd_id);
                  }}
                  >
                </button>
                  <h2>{feed.dd_likes}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
}
