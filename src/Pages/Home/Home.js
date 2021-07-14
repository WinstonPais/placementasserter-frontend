import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import classes from './Home.module.css';
import NavBar from './../../components/NavBar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "black";
    });
    return(
        <>
        <NavBar/>
        <Container className={classes.content}>
            <h1 className={classes.placement}>PLACEMENT</h1>
            <h1 className={classes.asserter}>ASSERTER</h1>
            <h6 className={classes.subpoint1}>Providing a new approach for staffing</h6>
            <Link to="/placementasserter-frontend/login">
                <Button className={classes.button} variant="dark" size="lg">
                    Begin
                </Button>
            </Link>
            <h6 className={classes.subpoint2}>©2021 All Rights Reserved | GB5</h6>        
        </Container>
        </>
    );
}

export default Home