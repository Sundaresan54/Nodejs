import React, { Component } from 'react';
import './App.css';
import Request from "superagent";

import Login from './component/Login';

class App extends Component {
  constructor(){
    super();

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

//   componentDidMount(){
//     Request.get("http://localhost:3001/").end(
//     (err,res)=>{
//       if (err) {
//         console.log(err);
//       }
//       else {
//         console.log(res,"hiii")
//         var data = JSON.parse(res.text);
//           this.setState({name:data.name,
//             age:data.age,
//             gender:data.gender
//             })
//       }
//     })
//   }
// handleChange(e) {
//   e.preventDefault();
//   this.setState({user: e.target.value});
// }
// handleSubmit(event) {
//   event.preventDefault();
//   console.log("called")
//   Request.post("http://localhost:3001/add")
//   .query({username:this.state.user})
//
//   .end((err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     else{
//       console.log("send");
//     }
// });
// }
  render() {

    return (
      <div className="App">
  <Login />
      </div>
    );
  }
}

export default App;