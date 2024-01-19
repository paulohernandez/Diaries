import React, { useState } from "react";
import { useFeed } from "../services/store/feedContext";

export default function StatusForm() {
  const [content, setContent] = useState('thoughts');
  const { feeds , dispatch } = useFeed()

  const onClickPost = async (e) => {
    const data = {
      content:content
    }
    const response = await fetch('http://localhost:4000/api/diaries/' , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    if(response.ok){
      setContent('')
      const data = await fetch('http://localhost:4000/api/diaries/')
      const feedDatas = await data.json()
      const feed = feedDatas.data[0]
      dispatch({ type:'CREATE_FEED' , payload: feed})
    }

  };


  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      >
      </textarea>
      <button onClick={onClickPost}>POST</button>
    </div>
  );
}
