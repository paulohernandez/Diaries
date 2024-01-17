import React, { useState } from "react";

export default function StatusForm() {
  const [content, setContent] = useState('thoughts');

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
