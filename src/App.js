import React, { Component } from 'react';
import './App.css';
import ItemList from "./components/itemList";
import axios from 'axios';

class App extends Component {
    state = {
        items: []
    };

    constructor(props) {
        super(props);

        axios.get(`http://localhost:3001/items`).then((response) => {
            this.setState({
                items: response.data
            });
        })
    }

    showItems() {
        return (
            this.state.items.length > 0 ? <ItemList items={this.state.items}/> : ''
        );
    }

    render() {
        return (
            <div className="App container">
                {this.showItems()}
            </div>
        );
    }
}

export default App;
