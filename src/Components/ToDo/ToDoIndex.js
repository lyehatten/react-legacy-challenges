import React from 'react';


class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
    }
  }
  render () {

    return(
      
      <ul> 
      {
        this.state.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} markTodoDone={this.props.markTodoDone} />
      );
      })
      }
      </ul>
      )
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoType = this.props.item.done ? <del>{this.props.item.value}</del> : <p>{this.props.item.value}</p>
    return(
      <li className="list-group-item">
        <div onClick={this.onClickDone}>
          {todoType}
        </div>
      </li>   
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" placeholder="Add to list!"/>
        <button type="submit" >Add</button> 
        <br/>
      </form>
    );   
  }
}
  
  
export default class TodoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {
      items: [{index: 1, value: "complete red badge", done: false}, {index: 2, value: "drink almond milk nog", done: true}, {index: 3, value: "finish this assignment", done: true}],
    }
  }
  addItem(todoItem) {
    this.state.items.unshift({
      index: this.state.items.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({items: this.state.items});
  }

  markTodoDone(itemIndex) {
    var todo = this.state.items[itemIndex];
    this.state.items.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.state.items.push(todo) : this.state.items.unshift(todo);
    this.setState({items: this.state.items});
  }
  render() {
    return (
      <div>
        <h1>To do list!</h1>
        <h6>Click the items to mark them complete (or click again to change back!)</h6>
        <TodoList items={this.state.items} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}