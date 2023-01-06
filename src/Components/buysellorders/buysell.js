import React from "react";  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './buysell.css'
import Dropdown from 'react-bootstrap/Dropdown';

const Buysell = () => {
    return(
        <div className="tc">
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-2'>
                    <div className='p-2 div10 m-0'>
                        <h6>BUY</h6>
                        <hr/>
                    </div>
                </Col>
                <Col className='col-md-2'>
                <div className='p-2 div11 m-0'>
                        <h6>SELL</h6>
                        <hr/>
                    </div>
                </Col>
            </Row>

            <Row className=' ms-auto'>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
                LIMIT
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">LIMIT</Dropdown.Item>
        <Dropdown.Item href="#/action-2">STOP LIMIT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Row>
        </div>
    )
}

export default Buysell