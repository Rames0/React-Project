import React from 'react'
import '../style/RegStyle.css'
import { Link } from 'react-router-dom'

function ForgetPass() {
  return (
    <div className="Container">
      
      <div className="Cointainer">
      <h1>Forgot Password</h1>
      
      <form action="#" name="Myform" method="POST" autoComplete="Off">
          <div className="form-group" id='Email'><br />
          <h5>Enter Your Registered Email To Reset Your Password.</h5><br/>
          <i className="fa fa-envelope email"/>
              <input type="email" placeholder="E-Mail" className='Same'/>
              </div>

              <div className="form-group">
                <button type="submit" className="button"> Reset Password </button>
              </div>
         
            <div className="form-group">
                <h5>New here?<Link className='nav-item' to='/Register'> <a> Register. </a></Link></h5>
            </div>
            <div className="form-group">
                <h5>Already have an account?<Link className='nav-item' to='/Login'><a> Login. </a></Link></h5>
            </div>
        </form>
      </div>
    </div>

    
  )
}

export default ForgetPass
 