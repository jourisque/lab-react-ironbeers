import React, {Component} from "react";
import axios from "axios";


class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      searchQ:"",
      isLoading: true,
    }
  }
  componentDidMount(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
      // console.log(response.data);
      this.setState({ beerList: response.data, isLoading:false,});
      
    })
    .catch(err => {
      
      alert("ALERT", err);
    });
  }

  querySync(event) {
    const {value} = event.target;
    const {searchQ} = this.state;
    this.setState({searchQ: value});
    axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${searchQ}`)
    .then(response =>{
      this.setState({beerList: response.data});
      
    })
    .catch(err=> {console.log(err);});
  }

  render(){
    const {beerList, isLoading} = this.state;
    if(isLoading){
      return(
        <div className="container">
          <p className="button is-loading">
            Button
          </p>
          <h1>Loading ...</h1>
        </div>
        
      )
    }
    return(
     <section className="Beers container">
        
       
          <input className="input" type="text" value={beerList.searchQ} onChange={event => this.querySync(event)} placeholder="Your Search Here"/>
          
          {beerList.map((oneBeer, index) => {
                return (
                  <div className="OneBeer box">
                    <div className="level section">
  <div className="level-left">
    <div className= "level-content">
    <figure className="image is-48x48">
    <img className="image" src={oneBeer.image_url} alt={oneBeer.name} />
    </figure>
</div>
  </div>
  
        
      
      <div className="level-right">
      <div className="level-content">
        <p className="title">{oneBeer.name}</p>
        <p className="subtitle is-6">{oneBeer.tagline}</p>
      </div>
      </div>
  

    
  </div>
</div>
                    

                  
  
                )
              } 
          )}
        
     </section>
    )
  }
}

export default Beers;

