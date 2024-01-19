import { useState } from "react";
import { useFeed } from "../services/store/feedContext";

export default function Status() {
  const { feeds , dispatch } = useFeed()
  const [ isLike , setIsLike ] = useState(false)
  const fetchFeeds = async () => {
    const response = await fetch('http://localhost:4000/api/diaries/')
    const json = await response.json()
    dispatch({ type: 'SET_FEEDS' , payload:json.data })
  } 

  const updateCountLikes = (id) => {
    console.log(id);
    
    // fetchFeeds()
  };

useState(()=>{
    fetchFeeds()
 },[])
  

  //This is the founder of diaries , Hope that you are doing great !,
  //grinding yourself to become WHAT YOU WANT IN LIFE!
  return (
    <div className="status-mainContainer">
      {feeds && feeds.map(feed => { return (
        <div key={feed.dd_id} className="status-container">
        <div className="status-information">
          <h1>
           {feed.dd_content}
          </h1>
        </div>
        <div className="status-react-container">
          <h2>{feed.dd_likes}</h2>
          <button onClick={()=>{updateCountLikes(feed.dd_id)}}>Like</button>
        </div>
      </div>
      )})}
    
    </div>
  );
}
