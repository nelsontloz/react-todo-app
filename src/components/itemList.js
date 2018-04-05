import React, { Component } from 'react';
import Item from './item';
import AddItem from './addItem';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['Go home', 'Play Dota', 'Win a game']
        };
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    onDeleteTask(taskToDelete) {
        let filteredTasks = this.state.items.filter(taskName => {
            return taskName !== taskToDelete;
        });

        this.setState({
            items: filteredTasks
        });
    }

    drawItems() {
        return this.state.items.map(taskName => (
            <div key={taskName} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Item taskName={taskName} onDelete={this.onDeleteTask}/>
            </div>
        ));
    }

    onAddItem(newItemName) {
        this.setState({
            items: [...this.state.items, newItemName]
        });
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <AddItem onAddItem={this.onAddItem}/>
                    </div>
                </div>
                <div className="row">
                    {this.drawItems(3)}
                </div>
            </div>
        );
    };
}

export default ItemList;