import React from 'react';

export default class GifList extends React.Component {

    liList = () => {
        return this.props.gifImages.map(el => {
        return <li key={el.id}><img src={el.images.original.url} /></li>
        //console.log(el);
    });
    }
    render() {
        return (
            <div>
                <ul>{this.liList()}</ul>
            </div>
            );
    }
}