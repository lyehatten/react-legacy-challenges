import React, {Component} from 'react'
import {Button} from 'reactstrap'

class DogIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      src: ''
    }
  }


  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {this.setState({
        src: data.message
      })})
      .catch(
        console.log('Fetch Failed! Try again later.')
      )
  }

  getDog = (event) => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {this.setState({
        src: data.message
      })})
      .catch(
        console.log('Fetch Failed! Try again later.')
      )
  }


  render(){
    return(
    <div>
      <img src={this.state.src} alt='random dog'/>
      <br/>
      <Button onClick={this.getDog} >New Dog!</Button>
    </div>
  )}
}

export default DogIndex