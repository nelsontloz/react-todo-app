import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    deleteTask() {
        this.props.onDelete(this.props.taskName);
    }

    handleChecked(event) {
        let isChecked = event.target.checked;
        this.setState({
            isDone: isChecked
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <button onClick={this.deleteTask} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="checkbox-inline">
                        <label>
                            <input type="checkbox" value="" onChange={this.handleChecked}/>
                            <span hidden={this.state.isDone}>{this.props.taskName}</span>
                            <s hidden={!this.state.isDone}>{this.props.taskName}</s>
                        </label>
                    </div>
                </div>

            </div>

        );
    }
}

export default Item;