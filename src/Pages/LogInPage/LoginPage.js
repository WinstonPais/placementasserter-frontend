import React, { useState } from 'react';
import classes from './LoginPage.module.css';
import NavBar from './../../components/NavBar/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState(""); 
    const history = useHistory();
    return(
        <>
        <NavBar/>
        <div className="container">
            <div style={{textAlign:"center",color:"white",marginTop:"1%",marginLeft:"30%",marginRight:"30%"}} className={[classes.bordercontainer,"row"].join(' ')}>
                <h1>Welcome!!</h1>
            </div>
            <div style={{marginTop:"1%",textAlign:"center",color:"white"}} className="row">
                <p>Login To Continue</p>
            </div>
            <div className="form-group">
                <div style={{marginTop:"4%",marginLeft:"40%",marginRight:"40%",height:"50px"}} className="row">
                    <input onChange={(e) => {setemail(e.target.value)}} className="form-control" style={{borderRadius:"8px",background:"#272727",color:"white"}} type="email" placeholder="Email ID" />
                </div>
                <div style={{marginTop:"4%",marginLeft:"40%",marginRight:"40%",height:"50px"}} className="row">
                    <input onChange={(e) => {setpassword(e.target.value)}} className="form-control" style={{borderRadius:"8px",background:"#272727",color:"white"}} type="password" placeholder="Password" />
                </div>
                <div style={{marginTop:"5%",marginLeft:"45%",marginRight:"45%"}} className="row">
                    <Button onClick={() => {
                        if((email === "wiltondsouza100@gmail.com") && (password === "123456")){
                            history.push("/placementasserter-frontend/dashboard")
                        }
                        else{
                            alert("Wrong email / password")
                        }
                    }} style={{borderColor:"white"}} className="form-control" variant="dark" size="lg">
                        Login
                    </Button>
                </div>
            </div>
            <div style={{marginTop:"3%",textAlign:"center",color:"white",marginLeft:"30%",marginRight:"30%"}} className={[classes.borderend,"row"].join(' ')}>
                <p style={{color:"white"}}>...</p>
            </div>
        </div>
        </>
    );
}

export default Login