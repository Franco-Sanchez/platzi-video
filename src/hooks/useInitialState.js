import { useEffect, useState } from "react";

function useInitialState(API) {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setVideos(data);
    }
    getVideos();
  }, []);

  return videos;
}

export default useInitialState;