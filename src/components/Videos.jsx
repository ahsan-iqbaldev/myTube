import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

// import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
    console.log(videos, direction,'videos, direction')
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;