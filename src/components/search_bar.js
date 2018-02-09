import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			searchinput: ''
		}
	}

	onInputChange(searchinput){
		this.setState({
			searchinput
		});

		this.props.onVideoSearch(this.state.searchinput)
	}

	render(){
		return(
				<div className='search-bar'>
					<input onChange={(event) => this.onInputChange(event.target.value)} value={this.state.searchinput}/>
				</div>
			)
	}
}

export default SearchBar