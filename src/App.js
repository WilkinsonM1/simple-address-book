import React, {Component} from 'react';
import './App.css';

import Card from './components/Card';

class App extends Component {
  // we'll start with a constructor and make our state object inside this
  // React docs recommend always passing props through constructor and super
  constructor(props) {
    super(props);
    // state object will have 3 keys: name, address and postcode
    this.state = {
      data: []
    }

  }

  // we need to make an onSubmit event handler which accepts "event" as an argument
  // and which will be called when the "Save" button is clicked. 
  // we also will add event.preventDefault() to stop the button reloading the page after it is clicked

  onSubmit = event => {
    // prevent page reloading
    event.preventDefault()  
    // getting the name, address and postcode entered by user
    const name = this.name.value
    const address = this.address.value
    const postcode = this.postcode.value
    const info = {name: name, address: address, postcode:postcode};
    // storing the state object data into data variable
    const data = this.state.data
    // pushing info object into data variable to change data object in state
    data.push(info)

    this.setState({
      data: data
    })
  }

  render(){
    return(
      <div className="container">
        {/* title of my app */}
        <h1>Address Book App</h1>
        {/* line break with visible horizontal line */}
        <hr/>
        <div className="row">
          {/* form with 3 input fields for name, address, postcode as well as a submit button */}
          <form className="form-inline" onSubmit={this.onSubmit}>
            <input 
              type="text"
              className="form-control mb-2 mr-sm-2 mb-sm-0"
              placeholder="Name"
              ref= {input => this.name = input}
            />
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                type="text"
                className="form-control"
                placeholder="Address" 
                ref= {input => this.address = input}

              />
              {/* the ref is a callback that is used to store a reference to the text input of the DOM element
              within an instance of a variable */}
                <input
                type="text"
                className="form-control"
                placeholder="Post Code" 
                ref= {input => this.postcode = input}

              />

            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-primary">Save</button>

          </form>

        </div>
        <hr/>

        {/* here we will be placing the card component which will display data from the state with a map function */}
        <div className="row">
          {
            // info is from the onSubmit handler
            this.state.data.map((info, index) => <Card key={index} info={info} />)
          }

        </div>


      </div>
    )
  }


}

export default App;
