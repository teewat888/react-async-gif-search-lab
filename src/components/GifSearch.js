import React from 'react';

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ''
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        }
    handleOnClick = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }
    render() {
        return (
        <div>
            <label>Enter a search Term</label>
            <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleOnChange}></input>
            <button onClick={this.handleOnClick}>Find Gifs</button>
        </div>
        )
    }
}