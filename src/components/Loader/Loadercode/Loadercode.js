import React from 'react';
import classes from './Loadercode.module.css';
import placementImg from './../asset/placement.png';

const Loadercode = () => {
    return(
        <div className={classes.loader}>
            <img className={classes.imag} src={placementImg} alt="loader" />
            <p className={classes.caption}>Placement Asserter</p>
        </div>
    );
}

export default Loadercode