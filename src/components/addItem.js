import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { itemName: '' };
    }

    addItem = () => {
        if (this.state.itemName === '') {
            return;
        }
        this.props.onAddItem(this.state.itemName);
        this.setState({ itemName: '' });
    };

    handleChange = (event) => {
        this.setState({ itemName: event.target.value });
    };

    render() {
        return (
            <div className="input-group">
                <input onChange={this.handleChange} value={this.state.itemName} type="text" className="form-control" placeholder="Task Name"/>
                <span className="input-group-btn">
                    <button onClick={this.addItem} className="btn btn-primary" type="button">Add</button>
                </span>
            </div>
        );
    }
}

export default AddItem;