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
submitClick=() =>
{
if((this.state.username=="Sundar") &&   (this.state.password=="Sundar@123"))
{
   this.setState({isLogined:true});

}
}
render() {
return (

<div>
<input type="text" name="username" hint="username" onChange=    {this.handleInputChange} />
<input type="password" name="password" hint="password" onChange={this.handleInputChange} />
<button  name="submit" onClick={this.submitClick}> Submit</button></div>

<Form >
  <Form.Group controlId="formBasicName">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="username" type="text" name="username" hint="username" onChange= {this.handleInputChange}  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="password" type="password" placeholder="Password"  name="password" hint="password" onChange={this.handleInputChange} />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit"  onClick={this.submitClick}>
    Submit
  </Button>
</Form>

</div>
);
}
}
