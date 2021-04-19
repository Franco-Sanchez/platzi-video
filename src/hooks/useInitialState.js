import { useEffect, useState } from "react";

function useInitialState(API) {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
}

export default useInitialState;