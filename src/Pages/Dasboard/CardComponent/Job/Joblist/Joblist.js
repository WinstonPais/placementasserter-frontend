import React from 'react';
import classes from './Joblist.module.css';

const Joblist = () => {
    return(
        <div className={[classes.joblist,"col"].join(' ')}>
            <button className={"btn "+classes.mybtn} disabled> Python</button>
            <button className={"btn "+classes.mybtn} disabled> Java</button>
            <button className={"btn "+classes.mybtn} disabled> C++</button>
        </div>
    );
}

export default Joblist