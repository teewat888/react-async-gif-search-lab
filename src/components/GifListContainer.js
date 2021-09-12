import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }
    fetchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0,3)
            })
        }).catch((e) => {console.log(e)})
    }
    render() {
        return (
        <div>
            <div>
                < GifList gifImages={this.state.gifs} />
            </div>
            <div>
                < GifSearch onSearch={this.fetchGifs}/>
            </div>
        </div>
        )
    }
}