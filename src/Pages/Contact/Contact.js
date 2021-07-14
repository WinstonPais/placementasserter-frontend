import React ,{ useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar';
import { Container,Row,Col } from 'react-bootstrap';
import classes from './Contact.module.css';
import github from './asset/github.png';
import mail from './asset/mail.png';

const Contact = () =>{
    useEffect(() => {
        document.body.style.backgroundColor = "black";
    });
    return (
        <>  
            <Navbar/>
            <Container className={classes.mycont}>
            <div>
                <h4 className={classes.cont}>Contact Us</h4>
            </div>
            <Row className={classes.myRow}>
                <Col className={classes.myCol1}>
                    <div>
                        <div className={classes.center}>
                            <img alt="github_Image" className={classes.imag} src={github} />
                        </div>
                        <div className={classes.center1}>
                            <h3>Click Here to Report Issues</h3>
                        </div>
                    </div>
                </Col>
                <Col className={classes.myCol2}>
                    <div className={classes.center1}>
                        <div>
                            <div className={classes.center2}>
                                <img alt="mail_Image" className={classes.imag} src={mail} />
                            </div>
                            <div className={classes.center3}>
                                <a href="mailto:wiltondsouza100@gmail.com"><h3>Click Here to Send us an email</h3></a>
                            </div>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            <div>
                <p className={classes.cont1}>Thank You For Your Feedback</p>
            </div>
            
        </Container>
        </>
    )
}

export default Contact;