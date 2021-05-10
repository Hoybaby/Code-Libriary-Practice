import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Frarthur' };
    }

    render() {
        // this.state.name is a state which acts as a prop to pass into the Child Component.
        return <Child name={this.state.name} />;
    }
}

ReactDOM.render(<Parent />, document.getElementById('app'))