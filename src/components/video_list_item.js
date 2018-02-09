import React from 'react'

const VideoListItem = ({video, onClickVideo}) => {
	return(
		<li onClick={() => onClickVideo(video)} className='list-group-item'>
			<div>
				<img src={video.snippet.thumbnails.default.url} />
			</div>
			<div>{video.snippet.title}</div>
		</li>
	)
}

export default VideoListItem
