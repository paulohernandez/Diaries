import React, { useState } from "react";
import { useFeed } from "../services/store/feedContext";
import { genericGetRequest } from "../services/api/genericGetRequest";
import { genericPostRequest } from "../services/api/genericPostRequest";

export default function StatusForm() {
  const [content, setContent] = useState("thoughts");
  const {  dispatch } = useFeed();

  const onClickPost = async (e) => {
    const data = {
      content: content,
    };
    const response = await genericPostRequest("http://localhost:4000/api/diaries/", data)

    if (response) {
      setContent("");
      const data = await genericGetRequest("http://localhost:4000/api/diaries/");
      const feedDatas = data.data
      dispatch({ type: "CREATE_FEED", payload: feedDatas[0] });
    }
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button onClick={onClickPost}>POST</button>
    </div>
  );
}
