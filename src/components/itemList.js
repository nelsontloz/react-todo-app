import React, { Component } from 'react';
import shortid from 'shortid';
import Item from './item';
import AddItem from './addItem';
import axios from "axios/index";

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items.map(value => {
                return {
                    id: value._id,
                    name: value.content,
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
        axios.post(`http://localhost:3001/items`, {content: newItemName}).then((response) => {
            this.setState({
                items: [...this.state.items, {
                    id: shortid.generate(),
                    name: newItemName,
                    isDone: false
                }]
            });
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