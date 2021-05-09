class Talker extends React.Component {

    talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    // important to not seperate talk with, next to render
    render() {
        return <Button onClick={this.talk} />;
    }
}

ReactDOM.render(
    <Talker />,
    document.getElementById('app')
);