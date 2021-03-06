import React from "react"

const VideoDetails = ({video}) => {
	console.log(video);
	if(!video){
		return <div>loading....</div>
	}
	const url =`https://www.youtube.com/embed/${video.id.videoId}`
	return(
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url} />
			</div>
			<div>{video.snippet.title}</div>
			<div>{video.snippet.description}</div>
		</div>
		)
}

export default VideoDetails

