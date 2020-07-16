import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

    state = {
        avatarId1: 3,
        avatarId2: 12,
        avatarId3: 45
    }

    changeAvatars() {
        [1, 2, 3].forEach((num) => this.changeAvatar(num));
    }

    changeAvatar(idNum) {
        const currentState = this.state[`avatarId${idNum}`];
        const newState = currentState < 66 ? currentState + 1 : 1;
        this.setState({
            [`avatarId${idNum}`]: newState
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Card name="Person 1" job="Pilot" avatarId={this.state.avatarId1} />
                    <Card name="Person 2" job="Nurse" avatarId={this.state.avatarId2} />
                    <Card name="Person 3" job="Lawyer" avatarId={this.state.avatarId3} />
                </div>
                <div className="row mt-md-4">
                    <div className="col-md-3">
                        <button onClick={this.changeAvatars.bind(this)} className="btn btn-secondary rounded">Change Avatars</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;