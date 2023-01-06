import React from "react";  
import Navigation from "./Components/navigation";
import Section from './Components/section';
import Navbar2 from "./Components/Navbar2";
import Signin from './Components/Signin.js'
import Signup from './Components/Signup'
import Signin_black from './Components/Signin_black'
import Signup_dark from './Components/Signup_dark'
import Navbar2_dark from './Components/navbar2_dark'
import Signup_on from "./Components/Signup_success";
import Signin_on from "./Components/Signin_success";
import Signin_on_dark from "./Components/Signin_success_dark";
import Signup_on_dark from "./Components/Signup_success_dark2";
import Navbar_p2p from "./Components/P2P/Navbar_p2p";
import P2p from "./Components/P2P/p2p";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      route:'home',
      navbar_status : "navbar_home",
      nav_bg : 'white',
      form_bg : "white",
      email : '',
      password : '',
      repassword1 : ""
    }
  }
  clicking = ()=>{
    window.location.href="https://www.wazirx.com"
  }

  first2 = ()=>{
    window.location.href="https://wazirx.com/exchange/"
  }

  second2 = ()=>{
    this.setState({
      route:'p2p_buy',
      navbar_status : "navbar_p2p_buy"
    })
  }

   third2= ()=>{
    this.setState({
      route:'login',
      navbar_status : "navbar_login"
    })
  }

   fourth2= ()=>{
    this.setState({
      route:'signup',
      navbar_status : "navbar_signup",
    })
  }


  p2ptosell = ()=>{
    this.setState({
      route:'p2p_sell',
      navbar_status : "navbar_p2p_sell"
    })
  }

  changingtheme = () =>{
    this.setState({
      nav_bg : 'black',
      form_bg : "black"
    })
    document.body.style.backgroundColor='#111622'
  }

  changingtheme2 = () =>{
    this.setState({
      nav_bg : 'white',
      form_bg : "white"
    })
    document.body.style.backgroundColor='#f0f2f5'
  }

  email_change = (event)=>{
    this.setState({
      email : event.target.value
    })
  }

   password_change = (event)=>{
    this.setState({
      password : event.target.value,
      repassword1 : event.target.value
    })
  }

  backtologin = () =>{
    this.setState({
      route:'login',
      navbar_status : "navbar_login"
    })
  }

  backtosignup = () =>{
    this.setState({
      route:'signup',
      navbar_status : "navbar_signup"
    })
  }

  gotobinance = ()=>{
    window.open('https://accounts.binance.com/hi/oauth/signin?return_to=L2VuL29hdXRoL2F1dGhvcml6ZQ%3D%3D', '_blank');
  }

  onSubmitSignin = ()=>{
    fetch("https://infinite-fjord-22983.herokuapp.com/signin",{
      'method':'post',
      'headers':{'Content-type':'application/json'},
      'body': JSON.stringify({
        email:this.state.email,
        password : this.state.password
      })
    }).then(res=> res.json()).then(final_data => {
      if (final_data.email) {
        this.setState({
          route:'signnedin',
          navbar_status : "navbar_signnedin"
        })
      }
    })
  }

  onSubmitSignin2 = ()=>{
    fetch("https://infinite-fjord-22983.herokuapp.com/signin",{
      'method':'post',
      'headers':{'Content-type':'application/json'},
      'body': JSON.stringify({
        email:this.state.email,
        password : this.state.password
      })
    }).then(res=> res.json()).then(final_data => {
      if (final_data.email) {
        this.setState({
          route:'signnedin',
          navbar_status : "navbar_signnedin"
        })
      }
    })
    this.setState({
      nav_bg : 'dark',
      form_bg : "dark",
    })
  }

  onSubmitSignup = ()=>{
    if (this.state.password === this.state.repassword1&&this.state.email!=''&&this.state.password!=''&&this.state.repassword1!='') {
    fetch('https://infinite-fjord-22983.herokuapp.com/signup', {
      'method':'post',
      'headers':{'Content-type':'application/json'},
      'body':JSON.stringify({
        email : this.state.email,
        password : this.state.password
      })
    }).then(res => res.json())
    this.setState({
      route:'signnedup',
      navbar_status : "navbar_signnedup"
    })
    }
    else{
      this.setState({
        route:'logasdfin',
        navbar_status : "navbar_lasdfogin"
      })
    }
  }

  goinghome = ()=>{
    this.setState({
      route:'home',
      navbar_status : "navbar_home"
    })
  }
  

  onSubmitSignup2 = ()=>{
    if (this.state.password === this.state.repassword1 &&this.state.email!=''&&this.state.password!=''&&this.state.repassword1!='') {
    fetch('https://infinite-fjord-22983.herokuapp.com/signup', {
      'method':'post',
      'headers':{'Content-type':'application/json'},
      'body':JSON.stringify({
        email : this.state.email,
        password : this.state.password
      })
    }).then(res => res.json())
    this.setState({
      route:'signnedup',
      navbar_status : "navbar_signnedup",
      nav_bg : 'white234asdf4asdf',
      form_bg : "whiasdfffdf223te"
    })
    }
    else{
      this.setState({
        route:'logasdfin',
        navbar_status : "navbar_lasdfogin"
      })
    }

  }

  render(){
    return(
      <div className="App">
        {this.state.route=='home' && this.state.navbar_status=='navbar_home'
        ?<div>
              <Navigation click2={this.clicking} first={this.first2} second = {this.second2} third = {this.third2} fourth = {this.fourth2} />
              <Section clicksignup={this.fourth2} />
              </div>
              :<div>              
                 {this.state.route=='login' && this.state.navbar_status=='navbar_login'
                 ?<div>
                  {this.state.nav_bg=='white'&& this.state.form_bg=='white'
                  ?<div>
                    <Navbar2 toblack={this.changingtheme} value23={'SIGNUP'} bah={this.backtosignup} backtohome={this.goinghome} />
                    <Signin backtosignup={this.backtosignup} binance={this.gotobinance} gologin={this.onSubmitSignin} signinemail={this.email_change} signinpassword={this.password_change}/>
                  </div>
                  :<div>
                    <Navbar2_dark towhite={this.changingtheme2} value23={'SIGNUP'}  bah={this.backtosignup} backtohome={this.goinghome} />
                    <Signin_black backtosignup={this.backtosignup} binance={this.gotobinance} gologin={this.onSubmitSignin2} signinemail={this.email_change} signinpassword={this.password_change} />
                  </div>
                  }
                 </div>
                 :<div>
                       {this.state.route=='signup' && this.state.navbar_status=='navbar_signup'
                       ?<div>
                        {this.state.nav_bg=='white'&& this.state.form_bg=='white'
                        ?<div>
                          <Navbar2 toblack={this.changingtheme} value23={'LOGIN'} bah={this.backtologin} backtohome={this.goinghome}  />
                          <Signup changeemail={this.email_change} changepassword={this.password_change} repassword={this.password_change}  submitting={this.onSubmitSignup} backtologin2={this.backtologin} />
                        </div>
                        :<div>
                          <Navbar2_dark towhite={this.changingtheme2} value23={'LOGIN'} bah={this.backtologin} backtohome={this.goinghome}  />
                          <Signup_dark changeemail={this.email_change} changepassword={this.password_change} repassword={this.password_change}  submitting={this.onSubmitSignup2} backtologin2={this.backtologin} />
                        </div>
                        }
                       </div>
                       :<div>
                        {this.state.route=='signnedup' && this.state.navbar_status=='navbar_signnedup'
                        ?<div>
                          { this.state.nav_bg=='white'&& this.state.form_bg=='white'
                          ?<div>
                        <Navbar2 toblack={this.changingtheme} value23={'LOGIN'} backtohome={this.goinghome} />
                        <Signup_on tologin={this.backtologin} />
                          </div>
                          :<div>
                        <Navbar2_dark towhite={this.changingtheme2} value23={'LOGIN'} bah={this.backtologin} backtohome={this.goinghome}  />
                        <Signup_on_dark tologin={this.backtologin} />
                          </div>
                          }
                        </div>
                        :<div>{this.state.route=='signnedin' && this.state.navbar_status=='navbar_signnedin'
                        ?<div>
                          {this.state.nav_bg=='white'&& this.state.form_bg=='white'
                          ?<div>
                            <Signin_on/>
                          </div>
                          :<div>
                            <Signin_on_dark />
                          </div>
                          }
                        </div>
                        :<div>
                          {this.state.route=='p2p_buy' && this.state.navbar_status=='navbar_p2p_buy'
                          ?<div>
                          <Navbar_p2p backtohome={this.goinghome} />
                          <P2p first233={this.backtosignup} seller={this.p2ptosell} value230={'seller'} value231={'PAY DIRECTLY TO SELLER'} value232={'The seller will confirm your payment'} value233={'fiat to crypto'} src1={'https://img.icons8.com/wired/344/soccer-yellow-card.png'} src2={'https://img.icons8.com/dotty/344/merchant-account.png'} src3={'https://img.icons8.com/color/344/tether--v2.png'} col10={'border_under'} col11={'none'} />
                          </div>
                          :<div>{this.state.route=='p2p_sell' && this.state.navbar_status=='navbar_p2p_sell'
                          ?<div>
                          <Navbar_p2p backtohome={this.goinghome} />
                          <P2p first233={this.backtosignup} buyer={this.second2} value230={'buyer'} value231={'CONFIRM RECEIVING THE PAYMENT'} value232={'WazirX will transfer the USDT to the buyer only after you acknowledge receiving payment'} value233={'crypto to fiat'} src1={'https://img.icons8.com/wired/344/soccer-yellow-card.png'} src2={'https://img.icons8.com/dotty/344/merchant-account.png'} src3={'https://img.icons8.com/external-black-fill-lafs/64/000000/external-USDC-cryptocurrency-black-fill-lafs.png'} col10={'none'} col11={'border_under'} />
                          </div>
                          :<div>Error</div>
                          }</div>
                          }
                        </div>
                        }</div>
                        }
                       </div>
                       }
                 </div>
                 }
              </div>
}
          </div>
    )
  }
}

export default App;