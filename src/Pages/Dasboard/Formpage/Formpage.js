import React from 'react';
import classes from './Formpage.module.css';
import NavBar  from '../../../components/NavBar/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const formpage = () => {
    return(
        <>
            <NavBar/>
            <div className="container">
            <div style={{textAlign:"center",color:"white",marginTop:"1%",marginLeft:"30%",marginRight:"30%"}} className={[classes.bordercontainer,"row"].join(' ')}>
                <h1>Enter the details</h1>
            </div>
            <div className="form-group">
                <div style={{marginTop:"4%",marginLeft:"40%",marginRight:"40%",height:"50px"}} className="row">
                    <input className="form-control" style={{borderRadius:"8px",background:"#272727",color:"white"}} type="text" placeholder="Job Title" />
                </div>
                <div style={{marginTop:"4%",marginLeft:"40%",marginRight:"40%",height:"50px"}} className="row">
                    <input className="form-control" style={{borderRadius:"8px",background:"#272727",color:"white"}} type="text" placeholder="Skills Required" />
                </div>
                <div style={{marginTop:"5%",marginLeft:"45%",marginRight:"45%"}} className="row">
                    <Button style={{borderColor:"white"}} className="form-control" variant="dark" size="lg">
                        Submit
                    </Button>
                </div>
                </div>
            <div style={{marginTop:"3%",textAlign:"center",color:"white",marginLeft:"30%",marginRight:"30%"}} className={[classes.borderend,"row"].join(' ')}>
                <Link style={{textDecoration:"None"}} to="/placementasserter-frontend/dashboard"> 
                    <p style={{color:"white"}}>Go Back</p>
                </Link>            
            </div>
        </div>
        </>
    )
}

export default formpage;