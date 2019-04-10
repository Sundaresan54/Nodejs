import React from 'react';
import Request from "superagent";
import {Button,Modal,Form, Col} from "react-bootstrap";

export default class Login extends React.Component{
constructor() {
  super()
  this.state = {
  username: '',
  password: '',
  confirmPassword:'',
  DOB:'',
  mobileNumber:'',
  isLogined: false,
  users:[],
  show: false
 
 }
}

handleClose=() =>{
  this.setState({ show: false });
}

handleShow=()=> {
  this.setState({ show: true });
}

handleInputUser = (event) => {
  event.preventDefault();
this.setState({
    username: event.target.value
  })
}
handleInputPassword = (event) => {
  event.preventDefault();
this.setState({
    password: event.target.value
  })
}

handleChangeModal = (event) =>{
this.setState({[event.target.name]: event.target.value})
console.log(this.state.username)
console.log(this.state.password)
console.log(this.state.mobileNumber)
console.log(this.state.DOB)
}

submitClick=(event) =>{
  console.log("comming inside");
event.preventDefault();
Request.get("http://localhost:3001/getUser")
.end((err, res) => {
      if (err) {
        console.log(err,"ggggggg");
      }
     else {
       console.log(JSON.parse(res.text))
      this.setState({ users: JSON.parse(res.text) }, () => {
        const { users, username, password} = this.state;
        for (var i = 0; i < users.length; i++) {
          console.log("loggedInU",users[i].username);
          console.log("loggedInP",users[i].passowrd);
          if (username == users[i].username && password == users[i].passowrd) {
            console.log("loggedIn");
            this.props.history.push("/main");break;
            
          }else {
            window.alert("Please check your credentials ot register");
            break;
          }
          
        }

      });
    }
    });

}

onRegister = (event) =>{
  Request.post("http://localhost:3001/storeUser")
  .query({username:this.state.username,password:this.state.password,
    confirmPassword:this.state.confirmPassword,DOB:this.state.DOB,mobileNumber:this.state.mobileNumber
  })
  .end((err, res) => {
        if (err) {
          console.log(err);
        }
        else{
          console.log("send");
          this.setState({[event.target.name]:""})
        }
    });
}


render() {
return (

<div>
<h1>BookStore App</h1>
<form>
  <div className="form-group">
    <label for="username">User Name </label>
    <input type="text" className="form-control" id="usename" aria-describedby="userHelp" placeholder="Enter Name" value={this.state.username} onChange={this.handleInputUser} required/>
    <small id="usename" className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value = {this.state.password} onChange={this.handleInputPassword} required/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="submit" className="btn btn-primary"  onClick={this.submitClick}>Signin</button>
  <button type="button"  className="btn btn-primary"  onClick= {this.handleShow}> Register</button>
  </div>
</form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridUserName">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text"  placeholder="Enter Name" value={this.state.username} name = "username"  onChange = {this.handleChangeModal} required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"   value={this.state.password} name="password"  onChange = {this.handleChangeModal} required/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridConfirmPassword">
    <Form.Label>confirm password</Form.Label>
    <Form.Control type="password" placeholder=" confirmPassword"  value={this.state.confirmPassword} name="confirmPassword"  onChange = {this.handleChangeModal} required/>
  </Form.Group>

  <Form.Group controlId="formGridDOB">
    <Form.Label>DateOfBirth</Form.Label>
    <Form.Control type="Date" placeholder="DD/MM/YYYY"  value={this.state.DOB} name = "DOB"  onChange = {this.handleChangeModal} required/>
  </Form.Group>

  <Form.Group controlId="formGridMobile">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="number" placeholder="Mobile Number"  value={this.state.mobileNumber}  name = "mobileNumber" onChange = {this.handleChangeModal} required/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={this.onRegister}>
    Register
  </Button>
</Form>
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
</div>

);
}
}
