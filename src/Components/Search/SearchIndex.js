import React, {Component} from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      thing: [],
      inputValue: '',
    }
  }

  searchFunctionOnChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const filteredThings = this.state.things.filter(thing => {
      return thing.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    return(
      <div>
        <Input placeholder='Search Here' onChange={this.searchFunctionOnChange} />
        <h3>Results:</h3>
        {filteredThings.map(x => {return <li key={x}>{x}</li>})}
      </div>
  )}
}

export default SearchIndex;
