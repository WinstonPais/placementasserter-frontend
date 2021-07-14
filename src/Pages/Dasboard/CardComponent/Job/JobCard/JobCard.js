import React from 'react';
import classes from './JobCard.module.css';
import Joblist from '../Joblist/Joblist';
import JobName from './../JobName/JobName';
import { Button } from 'react-bootstrap';

const JobCard = () => {
    return(
        <div className={classes.OuterProfileBody}>
            <div className={["container", classes.marginTopDetails].join(' ')}>
                <div className="row">
                    <JobName/>
                </div>
                <div className="row">
                    <Joblist />
                </div>
                <div className="row">
                    <Button style={{width: "150px",border: "10px",borderRadius: "50px !important",borderColor: "white !important",marginTop: "120px",marginBottom: "20px",marginLeft:"68%"}}>
                        View
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JobCard