import React from 'react';
import classes from './../NewCardCreation/NewCardCreation.module.css';

const JobCard = () => {
    return(
        <div className={classes.OuterProfileBody}>
            <div className={["container", classes.marginTopDetails].join(' ')}>
                <div className="row">
                    <h1 style={{textAlign:"center",marginTop:"60px",marginBottom:"10px",fontSize:"90px"}} className={classes.greyText}>+</h1>
                </div>
                <div className="row">
                    <h1 style={{textAlign:"center",marginTop:"40px",marginBottom:"20px"}} className={classes.greyText}>Click here to Add Job</h1>
                </div>
            </div>
        </div>
    )
}

export default JobCard