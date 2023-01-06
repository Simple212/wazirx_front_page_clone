import React from "react";  
import './signup_success.css'

const Signup_on = ({tologin})=>{
    return(
    <div className="">    
    <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3 tc">
        <img src='https://freepngimg.com/save/27889-green-tick/416x341' width={'200px'} className='mb-3'/>
        <p className='f4'>You have registered successfully with WazirX.</p>
        <a href="#" onClick={tologin} className="first23">Back to Log In</a>
    </article>
    </div>
    )
}

export default Signup_on