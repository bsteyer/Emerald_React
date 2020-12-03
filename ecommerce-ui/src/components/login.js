
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, {Component} from 'react';
import axios from "axios";
import MenuItem from '@material-ui/core/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <h2> Please Login</h2>
          <div>
           <TextField
             label="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               label="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button color="primary" label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}> Submit </Button>
         </div>
      </div>
    );
  //   this.state={
  //     username:'',
  //     password:'',
  //     menuValue:1,
  //     // loginComponent:localloginComponent,
  //     loginRole:'student'
  //   }
  // }
  // componentWillMount(){
  // // console.log("willmount prop values",this.props);
  // if(this.props.role != undefined){
  //   if(this.props.role == 'student'){
  //     console.log("in student componentWillMount");
  //     var localloginComponent=[];
  //     localloginComponent.push(
  //         <div>
  //          <br/>
  //            <TextField
  //              type="password"
  //              hintText="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange = {(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //     )
  //     this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
  //   }
  //   else if(this.props.role == 'teacher'){
  //     console.log("in teacher componentWillMount");
  //     var localloginComponent=[];
  //     localloginComponent.push(
  //         <div>
  //            <TextField
  //              type="password"
  //              hintText="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange={(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //     )
  //     this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
  //   }
  // }
  // }
  // handleClick(event){
  //   var self = this;
  //   var payload={
  //     "userid":this.state.username,
	//     "password":this.state.password,
  //     "role":this.state.loginRole
  //   }
  //   axios.post(apiBaseUrl+'login', payload)
  //  .then(function (response) {
  //    console.log(response);
  //    if(response.data.code == 200){
  //      console.log("Login successfull");
  //      var uploadScreen=[];
  //     //  uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
  //      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  //    }
  //    else if(response.data.code == 204){
  //      console.log("Username password do not match");
  //      alert(response.data.success)
  //    }
  //    else{
  //      console.log("Username does not exists");
  //      alert("Username does not exist");
  //    }
  //  })
  //  .catch(function (error) {
  //    console.log(error);
  //  });
  // }
  // handleMenuChange(value){
  //   console.log("menuvalue",value);
  //   var loginRole;
  //   if(value==1){
  //     var localloginComponent=[];
  //     loginRole='student';
  //     localloginComponent.push(
  //         <div>
  //            <TextField
  //              type="password"
  //              label="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange = {(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //     )
  //   }
  //   else if(value == 2){
  //     var localloginComponent=[];
  //     loginRole='teacher';
  //     localloginComponent.push(
  //         <div>
  //          <TextField
  //            label="Enter your College Rollno"
  //            floatingLabelText="Teacher Id"
  //            onChange = {(event,newValue) => this.setState({username:newValue})}
  //            />
  //          <br/>
  //            <TextField
  //              type="password"
  //              label="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange = {(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
  //        </div>
  //     )
  //   }
  //   this.setState({menuValue:value,
  //                  loginComponent:localloginComponent,
  //                  loginRole:loginRole})
  }
}
const style = {
 margin: 15,
};
export default Login;