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
if((this.state.username=="Sundar") &&   (this.state.password=="Sundar@123"))
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
<input type="text" name="username" hint="username" value={this.state.username} onChange=    {this.handleInputChange} />
<br/>
<input type="password" name="password" hint="password" value = {this.state.passwordeseteset} onChange={this.handleInputChange} />
<br/>
<button style= {{marginRight:"20px"}}  name="submit" onClick={this.submitClick}> Submit</button>
<button  name="Reset" onClick={this.handlePage}> Reset</button>
</div>
)
}
}
