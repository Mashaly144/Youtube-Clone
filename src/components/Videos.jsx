import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'loading...';
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            width: { xs: '100%', sm: '358px', md: '320px' },
            boxShadow: 'none',
            borderRadius: 0,
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
