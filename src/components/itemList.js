import React, { Component } from 'react';
import shortid from 'shortid';
import Item from './item';
import AddItem from './addItem';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['Go home', 'Play Dota', 'Win a game'].map(value => {
                return {
                    id: shortid.generate(),
                    name: value,
                    isDone: false
                }
            })
        };
    }

    onDeleteTask = (itemToDelete) => {
        let filteredTasks = this.state.items.filter(itemName => {
            return itemName.id !== itemToDelete.id;
        });

        this.setState({
            items: filteredTasks
        });
    };

    drawItems = () => {
        return this.state.items.map((item) => (
            <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Item item={item} onDelete={this.onDeleteTask}/>
            </div>
        ));
    };

    onAddItem = (newItemName) => {
        this.setState({
            items: [...this.state.items, {
                id: shortid.generate(),
                name: newItemName,
                isDone: false
            }]
        });
    };

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <AddItem onAddItem={this.onAddItem}/>
                    </div>
                </div>

                <div className="row">
                    {this.drawItems()}
                </div>
            </div>
        );
    };
}

export default ItemList;