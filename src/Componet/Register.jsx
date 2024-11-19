import React from 'react'
import '../style/RegStyle.css'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div class="Cointainer">
        <h1>Registration</h1>
        <div className="Form-Cointainer">
        
            <form action="#" name="Myform" method="POST" autoComplete="Off">
                
                    <div className="form-group" id="Name">
                    
                        <i className="fa fa-user lock" />
                        <input type="text" placeholder="First Name" className="Name" />
                            <span>
                            <i className="fa fa-user"> </i>
                            <input type="text" placeholder="Last Name" className="Name" />
                            </span>
                    </div>

                    <div className="form-group" id="Email">
                        <i className="fa fa-envelope email"/>
                        <input type="email" placeholder="Email" className="Same" size={25}/>
                        </div>
                        <div className="form-group" id="Pass">
                        <i className="fa fa-lock lock"/>
                        <input type="password" placeholder="Password" className="Same"/>
                        </div>
                        <div className="form-group" id="CPass">
                        <i className="fa fa-lock lock"/>
                        <input type="password" placeholder="Confirm Password" className="Same"/>
                        </div>
                        <div className="form-group" id="Phone">
                        <i className="fa fa-phone lock"/>
                        <input type="number" placeholder="Phone" size={10} className="Same"/>
                        </div>

                    <div className="form-group">
                    <label>Gender:</label>
                        <input type='radio' name='r1' className='radio'/>
                        <label>Male</label>
                        <input type='radio' name='r1' className='radio'/>
                        <label>Female</label>
                    </div>

                    <div className="form-group">
                    <input type="checkbox" className='check'/><label className='check'> Agree To Terms And Conditions </label>
                    </div>

                    <div className="form-group">
                    <button type="submit" className="button"> <a> Register </a></button>
                    </div>

                    <div className="form-group">
                    <h5>Already have an account? <Link className='nav-item' to='/Login'><a> Login </a></Link></h5>
                    </div>
                
            </form>
            </div>
        </div>
               
  )
}

export default Register
