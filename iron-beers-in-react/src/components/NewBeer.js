import React, {Component} from "react";
import axios from "axios";

class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      tagline:"",
      description:"",
      first_brewed:"",
      brewers_tips:"",
      attenuation_level:0,
      contributed_by:"",
    }
  }

  genSync(event){
    const {value, name} = event.target;
    this.setState ({[name]: value});
  } 

  handleSubmit(event) {
    event.preventDefault();

    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state).then(response => {console.log(response);}).catch(err=> {console.log(err);});
  }
  
  render(){
    return(
      <div className="NewBeer">
        
        
        <div className="notification is-success">
          <strong>ADD A NEW BEER</strong> 
        </div>
       
        <form onSubmit= {event => this.handleSubmit(event)}>
         
          <div className="field">
            <label className="label">
              Name: 
            </label>
              <div className="control">
                <input className="input" name="name" placeholder="Name Here" type="text" value={this.state.name}
                onChange= {event => this.genSync(event)} />
            </div>
          </div>

          <div className="field">
            <label className="label">
              TagLine:
            </label>
              <div className="control">
              <input className="input" name="tagline" placeholder="Tagline" type="text" value={this.state.tagline}
            onChange= {event => this.genSync(event)} />
            </div>
          </div>

          <div className="field">
            <label className="label">
              Description:
            </label>
              <div className="control">
              <input className="input" name="description" placeholder="Description" type="text" value={this.state.description}
            onChange= {event => this.genSync(event)} />
            </div>
          </div>

          <div className="field">
            <label className="label">
              First Brewed On:
            </label>
              <div className="control">
                <input className="input" name="first_brewed" placeholder="First Brewed In" type="date" value={this.state.first_brewed}
                onChange= {event => this.genSync(event)} />
            </div>
          </div>

          <div className="field">
            <label className="label">
              Brewer Tips:
            </label>
              <div className="control">
              <input className="input" name="brewers_tips" placeholder="Tip Here" type="text" value={this.state.brewers_tips}
            onChange= {event => this.genSync(event)} />
            </div>
          </div>

             <div className="field">
            <label className="label">
              Attenuation Level:
            </label>
              <div className="control">
              <input className="input" name="attenuation_level" placeholder="Att Lvl" type="number" value={this.state.attenuation_level}
            onChange= {event => this.genSync(event)} />
            </div>
          </div>

             <div className="field">
            <label className="label">
              Your Name:
            </label>
              <div className="control">
              <input className="input" name="contributed_by" placeholder="Your Name Here" type="text" value={this.state.contributed_by}
            onChange= {event => this.genSync(event)} />
            </div>
          </div>

<div className="control">
          <button className="button is-primary">Add Your Beer</button>
          </div>
        </form>

      </div>
    )
  }
}

export default NewBeer;