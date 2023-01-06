import React from "react";  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signin = ({backtosignup,binance,gologin,signinpassword,signinemail}) =>{
    return (
            <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                   <Form>
                    <h5 className='b f3'>Login to the WazirX</h5>
                    <hr className='mb-4 mt-0' />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='b f6'>EMAIL</Form.Label>
                        <Form.Control className='p-3 f5 input101' onChange={signinemail} type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='b f6'>PASSWORD</Form.Label>
                        <Form.Control className='p-3 f5 input101' type="password" onChange={signinpassword} placeholder="Enter your Password" />
                    </Form.Group>
                    <hr className='mt-5' />
                    <Button className='tc d-flex justify-content-center align-items-center w-100 flex-row btn100 p-2' onClick={gologin}>
                        <Row className='tc'>
                        <Col className='col-md-6'>
                        LOGIN
                        </Col>
                        <Col className='col-md-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="svg20 bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                        </Col>
                        </Row>
                    </Button>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                            <a onClick={backtosignup}  className='anchor_t'>Sign Up</a>
                        </Col>
                    </Row>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                            <a href='https://www.google.com' className='anchor_t'>Forgot Password?</a>
                        </Col>
                    </Row>
                    <Row className='tc mt-3 mb-3'>
                        <Col className='col-md-4'><hr/></Col>
                        <Col className='col-md-4'>OR</Col>
                        <Col className='col-md-4'><hr/></Col>
                    </Row>
                    <Row className='tc'>
                        <Col onClick={binance} className='col-md-12 binance_logo'>
                            <img src='https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Clipart.png'  className='me-2 ms-2' width={'30px'}/>
                            LOGIN WITH BINANCE
                        </Col>
                    </Row>

                    </Form>
                </article>
    )
}

export default Signin