import React, { Component } from 'react';

class AddItem extends Component {

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Task Name"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Add</button>
                </span>
            </div>
        );
    }
}

export default AddItem;