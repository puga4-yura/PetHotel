import React, {Component} from 'react';
import * as axios from 'axios'

class Clients extends Component {


  componentDidMount() {
    setTimeout(() => {
      this.props.fetchData("https://randomuser.me/api/?results=100");
    }, 2000)

  };
  componentDidUpdate() {
    setTimeout(() => {
      this.props.fetchData("https://randomuser.me/api/?results=100");
    }, 2000)

  };

  /*  axios.get("https://randomuser.me/api/?results=100").then(response => {
        debugger;
      //props.store.clients(response.data.results)
    })*/

  render() {

    console.log(this.props.results);
debugger;
    return (
      <div>
        {this.props.results.map((person, index) => {
          return <div key={index}>
                    <div>{index}</div>
                    <img src={person.picture.medium}/>
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                </div>
        })}
      </div>
    )
  }

}

export default Clients;