import React, { Component } from "react"

class DogPic extends Component {


  constructor(props) {
    super(props)
    this.state = {
      pic: "",
    }
  }

  getDogPic = (e) => {
    fetch(e)
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({ pic: payload.message})
      })
      //if there is an issue and the promise is rejected, the function will be able to handle the errors. ending each fetch request with a catch is good practice
      .catch(error => {
        console.log(error)
      })
    }
  
  
    componentDidMount(){
      this.getDogPic(this.props.dogURL)
    }
  
    getDogOnClick = () => {
      this.getDogPic(this.props.dogURL)
    }
  
    render(){
      return (
        <>
        <div className="dog-card">
        <div className= "dog-name-overlay">
          <h3 className="dog-name">
            { this.props.dogName }
          </h3>
        </div>
        { this.state.pic &&
          <div> 
            <img onClick= { this.getDogOnClick }
              src= { this.state.pic } className="dog-image"
              alt='doggos' />
          </div>
        }
        </div>
        </>
      )
    }
  }


export default DogPic;