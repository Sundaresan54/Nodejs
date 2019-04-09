import React from 'react';
import {Form,Button} from 'react-bootstrap'



export default class Login extends React.Component{
constructor() {
  super()
  this.state = {
  username: '',
  password: '',
  isLogined: false
 }
}

handleInputChange = (event) => {
this.setState({
    [event.target.name]: event.target.value
  })
}
submitClick=(event) =>{
if((this.state.username=="sundar@gmail.com") &&   (this.state.password=="Sundar@123"))
{
  console.log("logged in")
   this.setState({isLogined:true,
      username:"",
      password:""
   });

}
else{
  if((this.state.username=="") ||   (this.state.password=="")){
    window.alert("Please enter your credentials");
  }
}
}
render() {
return (

<div>
<h1>BookStore App</h1>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange=    {this.handleInputChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value = {this.state.passwordeseteset} onChange={this.handleInputChange}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="submit" className="btn btn-primary"  onClick={this.submitClick}>Submit</button>
  <button  name="Reset"className="btn btn-primary" onClick={this.handlePage}> Reset</button>
  </div>
</form>
</div>
)
}
}
