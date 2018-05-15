import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { itemName: '' };
    }

    addItem = (event) => {
        event.preventDefault();
        if (this.state.itemName === '') {
            return;
        }
        this.props.onAddItem(this.state.itemName);
        this.setState({ itemName: '' });
        this._input.focus();
    };

    handleChange = (event) => {
        this.setState({ itemName: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.addItem}>
                <div className="input-group">
                    <input onChange={this.handleChange}
                           ref={(el) => {
                               this._input = el;
                           }}
                           value={this.state.itemName} type="text" className="form-control" placeholder="Task Name"/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default AddItem;