// this code will make create a simple form which will normally change when text is being input but the onchange function is created just yet
// 1.to make the function we have to write it before the render function.
// 2. make an handler function that contains the parameter called e
// 3. make a this.setState({ userInput: e.target.value})
// 4. since i am using a setState, it needs an initial State
// 5. To make the initial state, we have to create constructor function and super with then the this.state = {} inside the constructor
// 6. after setting the intial state, need to bind it and then add a value attr to the input and = to {this.state.userInput}
// 7. after the value is assigned, then you change the h1 tag to the {this.state.inputChange}



import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {

    constructor(props){
        super(props)

        this.state = {userInput: ''}

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text"  value={this.state.userInput} onChange={this.handleUserInput} />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);