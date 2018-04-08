import React, { Component } from 'react';
import './item.css';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.item.name,
            editing: false,
            isDone: props.item.isDone
        };
    }

    deleteTask = () => {
        this.props.onDelete(this.props.item);
    };

    editTask = () => {
        if (this.state.editing) {
            this.props.item.name = this.state.name;
        }
        this.setState({
            editing: !this.state.editing
        });
    };

    handleChecked = (event) => {
        let isChecked = event.target.checked;
        this.props.item.isDone = isChecked;
        this.setState({
            isDone: isChecked
        });
    };

    handleUpdateItem = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    drawContent = () => {
        return (
            this.state.editing ? <div>
                    <textarea value={this.state.name} onChange={this.handleUpdateItem}/>
                </div>
                :
                <div>
                    <input className="mark-as-done" type="checkbox" value="" onChange={this.handleChecked}/>
                    <div hidden={this.state.isDone}>{this.state.name}</div>
                    <div hidden={!this.state.isDone}>
                        <s>{this.state.name}</s>
                    </div>
                </div>
        );
    };

    render() {
        return (
            <div className={"panel panel-default"}>
                <div className="panel-body">
                    <button onClick={this.deleteTask} type="button" className="btn btn-danger btn-sm">
                        <span>Remove</span>
                    </button>
                    <button onClick={this.editTask} type="button" className="btn btn-default btn-sm">
                        <span className={this.state.editing ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-pencil"}/>
                    </button>
                    {this.drawContent()}
                </div>

            </div>

        );
    }
}

export default Item;