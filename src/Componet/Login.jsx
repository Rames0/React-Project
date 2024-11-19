import React from 'react'
import '../style/RegStyle.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="container-expand-lg text-center bg-body-tertiary">
            <p className='fs-3'>Shopping</p>
            <p>Greate Shopping comes with Greate Website</p>
    </div>
    
    <div className="Cointainer">
    <h1>Login</h1>
    <form>
      <div className="form-group">
          <i className="fa-solid fa-user"/>
        <input type="text" placeholder="UserName" className="Same" id="login" onChange={(e)=>setuser_id(e.target.value)}  />    
      </div>

      <div className="form-group">
          <i className="fa-solid fa-key"/>
        <input type="password" placeholder='Password' className="Same" id="passowrd" onChange={(e)=>setpassword(e.target.value)} />
      </div>

      <div className="form-group">
        <h5>Forget Password? Click <Link className='nav-item' to='/ForgetPass'><a> Here </a></Link></h5>
      </div>
      
      <button type="submit" className="Lbutton" onSubmit={()=>handlesummit()}> Login </button>
    </form>
   </div>
      
    </>
  )
}

export default Login
