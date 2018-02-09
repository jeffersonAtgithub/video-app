import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoDetails from './components/video_detail'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDRLVf7YaB79uczlTJKaBri27Di92Q7MUU'

class PracticeApp extends Component{	
	
	constructor(props){
		super(props)
		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.VideoSearch('React JS');
	}

	VideoSearch(searchinput){
		YTSearch({key: API_KEY, term: searchinput}, (videos) => {
			this.setState({videos, selectedVideo: videos[0]});
		})
	}

	render(){
		const videoSearch = _.debounce((term) => this.VideoSearch(term), 1000)
		return(
			<div>
				<SearchBar onVideoSearch={(searchinput) => videoSearch(searchinput)}/>
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList onClickVideo={(video) => this.setState({selectedVideo: video})} videos={this.state.videos}/>
			</div>
		)	
	}
}

ReactDOM.render(<PracticeApp />, document.querySelector('.container'));