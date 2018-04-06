import React, { Component } from 'react';
import AddItem from "./addItem";

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            isDone: props.item.isDone
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
    }

    deleteTask() {
        this.props.onDelete(this.props.item);
    }

    editTask() {
        this.setState({
            editing: true
        });
    }

    handleChecked(event) {
        let isChecked = event.target.checked;
        this.props.item.isDone = isChecked;
        this.setState({
            isDone: isChecked
        });
    }

    handleUpdateItem(itemName) {
        this.setState({
            editing: false
        });
        this.props.item.name = itemName;
    }

    drawContent() {
        return (
            this.state.editing ? <AddItem onAddItem={this.handleUpdateItem}/> :
                <div className="checkbox-inline">
                    <label>
                        <input type="checkbox" value="" onChange={this.handleChecked}/>
                        <span hidden={this.state.isDone}>{this.props.item.name}</span>
                        <s hidden={!this.state.isDone}>{this.props.item.name}</s>
                    </label>
                </div>
        );
    }

    render() {
        return (
            <div className={"panel panel-default"}>
                <div className="panel-body">
                    <button onClick={this.deleteTask} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <button onClick={this.editTask} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
                    </button>
                    {this.drawContent()}
                </div>

            </div>

        );
    }
}

export default Item;