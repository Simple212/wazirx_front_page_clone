import React from "react";  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import './p2p.css'

const P2p = ({first233,buyer,seller,value230,value231,value232,value233,src1,src2,src3,col10,col11})=>{
    return(
        <div>
            <Container fluid>
            <Row className='row237'>
                <Col className='col-md-7 d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='text-black b f1 text-center'>Buy & sell Bitcoin instantly with your bank account</h3>
                    <p className='text-black b text-center f3'>Zero fees, 100% safe, world's first auto-matching P2P engine</p>
                    <p className='col300 b text-center f4'>WazirX P2P is here to make Fiat to Crypto conversion cheaper, faster & simpler for everyone!</p>
                    <Row>
                        <Col className='col-md-12'>
                            <Button className='btn50 p-4 me-2 ms-2 mt-2 b' onClick={first233}>JOIN THE REVOLUTION</Button>
                            <Button className='btn51 p-4 me-2 ms-2 mt-2 b'>VIEW MARKET</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className='col-md-5 d-flex justify-content-start align-items-center'>
                    <img src='https://wazirx.com/static/media/p2p-landing-hero.b915ab43.svg' />
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-10 text-center'>
                    <h2 className='b text-center text-black'>HOW P2P WORKS</h2>
                    <Row className='mt-5 d-flex justify-content-center'>
                        <Col className = {`col-md-5 b f4 col_p2p ${col10}`} onClick={buyer}>Buyer</Col>
                        <Col className = {`col-md-5 b f4 col_p2p ${col11}`} onClick={seller}>Seller</Col>
                    </Row>
                    <p className='b text-center text-black mt-5 f3'>WazirX P2P helps you convert your instantly where WazirX acts as an escrow for safekeeping of the transaction.</p>
                    <Row>
                        <Col className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                            <img src={`${src1}`} className='first200' width={'100px'} />
                            <span className="span1 w-50">Step 1</span>
                            <p classNmae='h3_10 m-0'>PLACE AN ORDER</p>
                            <p className='para100 mt-1'>You’ll be auto-matched with a {value230} instantly</p>
                        </Col>
                        <Col className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                        <img  src={`${src2}`} width={'100px'} />
                            <span className="span1 w-50">Step 2</span>
                            <p classNmae='h3_10 m-0'>{value231}</p>
                            <p className='para100 mt-1'>{value232}</p>
                        </Col>
                        <Col className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                        <img  src={`${src3}`} width={'100px'} />
                            <span className="span1 w-50">Step 3</span>
                            <p classNmae='h3_10 m-0'>WAZIRX RELEASES THE ESCROWED USDT</p>
                            <p className='para100 mt-1'>It makes WazirX P2P a safe and fast method to convert {value233}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='mt-5'>
                <h3 className='b text-center text-black mb-3'>BENEFITS</h3>
                <Col className='col-md-4  tc'>
                <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                    <img src='https://wazirx.com/static/media/p2p-landing-benefits-1.acc459d9.svg'/>
                    <h4 className='b text-center text-black mt-3 mb-3'>FASTER</h4>
                    <p>Instant auto matching</p>
                    <p>XID for high volume traders</p>
                    <p></p>
                </article>
                </Col>

                <Col className='col-md-4 tc'>
                <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                    <img src='https://wazirx.com/static/media/p2p-landing-benefits-2.0fb16118.svg'/>
                    <h4 className='b text-center text-black mt-3 mb-3'>CHEAPER</h4>
                    <p>Zero transaction fee</p>
                    <p>Yes, it’s 100% free!</p>
                    <p></p>
                </article>
                </Col>

                <Col className='col-md-4  tc'>
                <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                    <img src='https://wazirx.com/static/media/p2p-landing-benefits-3.6c6c1e03.svg'/>
                    <h4 className='b text-center text-black mt-3 mb-3'>SIMPLER</h4>
                    <p>Zero transaction fee</p>
                    <p>Safe with verified traders</p>
                    <p></p>
                </article>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center'>
            <h3 className='b text-center text-black mb-3 mt-5'>STATS</h3>

            <Row>
                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-1.1b311355.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>$18 M+</h3>
                        <p className='p-0 m-0'>P2P trades so far</p>
                    </article>
                    </Col>

                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-2.215070c4.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>2500+</h3>
                        <p className='p-0 m-0'>5 star reviews</p>
                    </article>
                    </Col>

                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-3.edadd263.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>0</h3>
                        <p className='p-0 m-0'>fraud cases</p>
                    </article>
                    </Col>
                </Row>


                <Row>
                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-4.a1e83003.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>$60 M+</h3>
                        <p className='p-0 m-0'>volume of trades</p>
                    </article>
                    </Col>

                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-5.1355ee1a.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>19.4 minutes</h3>
                        <p className='p-0 m-0'>time taken</p>
                    </article>
                    </Col>

                    <Col className='col-md-4 d-flex '>
                    <article className="w-80 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 main1">
                        <h5 className='text-end'>
                        <img className='ms-auto mb-4' src='https://wazirx.com/static/media/p2p-landing-stats-6.72684378.svg'/>
                        </h5>
                        <h3 className='b m-0 p-0'>75,000+</h3>
                        <p className='p-0 m-0'>app installs</p>
                    </article>
                    </Col>
                </Row>

                <Row className='mt-5 mb-5 row10'>
        <Col className="col-md-10">
          <Row>
          <h1 className="b tc text-white mt-4">DOWNLOAD WAZIRX</h1>
          </Row>

          <Row className='d-flex justify-content-center'>
            <Col className="col-md-3 mb-4 mt-4">
            <a href="https://play.google.com/store/apps/details?id=com.wrx.wazirx&referrer=utm_source%3DWazirX%2520Desktop%26utm_medium%Hero%2520Image%26utm_term%3DDownload%2520App" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" width={'200px'} />
            </a>
            </Col>
            <Col className="col-md-3 mb-4 mt-4">
            <a href="https://apps.apple.com/in/app/wazirx/id1349082789" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" width={'200px'} />
            </a>
            </Col>
            <Col className="col-md-3 mb-4 mt-4">
            <a href="https://download.wazirx.com/desktop-apps/WazirXSetup-win.exe" target="_blank">
            <img src="https://applications.kitco.com/sites/default/files/windows_3.png" width={'200px'} />
            </a>
            </Col>
            <Col className="col-md-3 mb-4 mt-4">
            <a href="https://download.wazirx.com/desktop-apps/WazirXSetup-mac.dmg" target="_blank">
            <img src="https://applications.kitco.com/sites/default/files/mac-button.png" width={'200px'} />
            </a>
            </Col>
          </Row>

        </Col>

        <Col className="col-md-2">
        <img src="https://wazirx.com/static/media/headerImage.4e815cf9.png" className='w-100'/>
        </Col>
      </Row>



      <Row>
        <Row className='m-5'>
          <Col className='col-md-2'>
            <img src="https://wazirx.com/static/media/wazirx-logo-blue.8f74de7a.png"/>
          </Col>
          <Col className='col-md-8 ms-auto'>
            <a href="https://play.google.com/store/apps/details?id=com.wrx.wazirx&referrer=utm_source%3DWazirX%2520Desktop%26utm_medium%Hero%2520Image%26utm_term%3DDownload%2520App" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" width={'180px'} />
            </a>

            <a href="https://apps.apple.com/in/app/wazirx/id1349082789" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" width={'180px'}  />
            </a>

            <a href="https://download.wazirx.com/desktop-apps/WazirXSetup-win.exe" target="_blank">
            <img src="https://applications.kitco.com/sites/default/files/windows_3.png" width={'180px'} />
            </a>

            <a href="https://download.wazirx.com/desktop-apps/WazirXSetup-mac.dmg" target="_blank">
            <img src="https://applications.kitco.com/sites/default/files/mac-button.png" width={'180px'} />
            </a>
          </Col>
          <hr className='mt-4 mb-4'/>
        </Row>
        <Row className='d-flxe justify-content-center'>
          <Col className='col-md-2'>
            <ul>
            <h4 className='b bold'>About</h4>
              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Blog</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Careers</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>WazirX Warriors</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Announcements</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Media Assets</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Terms Of Use</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col className='col-md-2'>
          <ul className='ul10'>
            <h4 className='b bold'>Services</h4>
              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Download</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Corporate Account</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Referral Program</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Market Maker Program</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>WazirX API</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>List Your Coin</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Partnerships & Enquiries</a>
              </li>
            </ul>
          </Col>
          <Col className='col-md-2'>
          <ul className='ul10'>
            <h4 className='b bold'>Support</h4>
              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Help Center</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Fees</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Security</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Law Enforcement Request</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>What Is Bitcoin</a>
              </li>
            </ul>
          </Col>
          <Col className='col-md-2'>
          <ul className='ul10'>
            <h4 className='b bold'>Socials</h4>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Twitter</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Facebook</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
             </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Instagram</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>LinkedIn</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="
              me-2 bi bi-telegram" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Telegram</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Youtube</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-reddit" viewBox="0 0 16 16">
              <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
              </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Reddit</a>
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/sv" width="16" height="16" fill="currentColor" className="me-2 bi bi-coin" viewBox="0 0 16 16">
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
                <a href='https://wazirx.com/blog/' target='_blank'>Coinmarketcap</a>
              </li>
            </ul>
          </Col>
          <Col className='col-md-2'>
          <ul className='ul10'>
            <h4 className='b bold'>Buy Crypto</h4>
              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Bitcoin</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Ether</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy USDT</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Tron</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Matic</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Dogecoin</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy SHIB</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Solana</a>
              </li>

              <li>
                <a href='https://wazirx.com/blog/' target='_blank'>Buy Cardano</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <hr className='mt-4 mb-4'/>
          <Col className='col-md-12'>
            <p className='tc'>© WazirX. All rights reserved</p>
          </Col>
        </Row>
      </Row>

      
            </Row>
            </Container>
        </div>
    )
}
export default P2p