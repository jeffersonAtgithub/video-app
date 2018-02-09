import React from 'react'

import VideoListItem from './video_list_item'

const VideoList = (props) => {
	const videoeach = props.videos.map((video, i) => (<VideoListItem
				onClickVideo={props.onClickVideo}
				key={`video-item-${i}`}
				video={video}
			/>))
	return (
        <ul className='col-md-4 list-group'>
          {videoeach}
        </ul>
      )
}

export default VideoList