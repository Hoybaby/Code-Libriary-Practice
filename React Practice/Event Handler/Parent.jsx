import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };
        // this  is to bind our new method to the current instance.
        this.changeName = this.changeName.bind(this);
    }
    // this alone wont pass the correct arugment to the location on the page. it will pass an event ovject as all event listensers do and thats why we have to make a new function
    // which we did with handleChange(e)
    changeName(newName) {
        this.setState({
            name: newName
        })
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);