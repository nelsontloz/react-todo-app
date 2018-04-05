import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask() {
        this.props.onDelete(this.props.taskName);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <button onClick={this.deleteTask} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.props.taskName}
                </div>

            </div>

        );
    }
}

export default Item;