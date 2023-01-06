import React from "react";  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import './Signup_dark.css'

const Signup = ({backtologin2,changeemail,changepassword,repassword,submitting}) =>{
    return (
            <article class="mw6 center main233 br3 pa3 pa4-ns mv3 ba b--black-10">
                   <Form>
                    <h5 className='b f3 h5_dark'>Signup to WazirX</h5>
                    <hr className='mb-5 mt-0' />
                    <h5 className='mb-4 f4 h5_dark'>Let's start by submitting your registration details</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='b f6 dark33'>EMAIL</Form.Label>
                        <Form.Control className='p-3 f5 input1011' type="email" onChange={changeemail} placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='b f6 dark33'>PASSWORD</Form.Label>
                        <Form.Control className='p-3 f5 input1011' type="password" onChange={changepassword} placeholder="Enter your Password" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='b f6 dark33'>CONFIRM PASSWORD</Form.Label>
                        <Form.Control className='p-3 f5 input1011' type="password" onChange={repassword} placeholder="Re-enter Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='b f6 dark33'>REFERRAL CODE</Form.Label>
                        <Form.Control className='p-3 f5 input1011' type="password"  placeholder="Enter Referral Code (Optional)" />
                    </Form.Group>
                    <hr className='mt-5' />
                    <Row className='tc mb-4 row_terms d-flex justify-content-center align-items-center'>
                        <Col className='col-md-12 col23 pt-3'>
                            <p>
                                <input type='checkbox' className='custom-control-input ms-2 me-2' />
                                I agree to WazirX's 
                                <a href='https://s3.ap-south-1.amazonaws.com/wrx-assets/WazirXUserAgreement.pdf?v1' target='_blank' className='ms-1 anchor_2'>
                                Terms of Service
                                </a>
                                </p>
                        </Col>
                    </Row>
                    <Button className='tc d-flex justify-content-center align-items-center w-100 flex-row btn100 p-2' onClick={submitting} >
                        <Row className='tc d-flex justify-content-center align-items-center'>
                        <Col className=' tc col-md-8'>
                        SIGNUP
                        </Col>
                        <Col className='col-md-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="svg20 bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                        </Col>
                        </Row>
                    </Button>

                    <Row className='tc mt-3'>
                        <Col className='col-md-12 tc'>
                            <a onClick={backtologin2} className='anchor_t tc'>Log In</a>
                        </Col>
                    </Row>


                    </Form>
                </article>
    )
}

export default Signup