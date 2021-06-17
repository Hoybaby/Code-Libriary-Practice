// this code will make create a simple form which will normally change when text is being input but the onchange function is created just yet



import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleUserInput} />
                <h1>I am an h1.</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);