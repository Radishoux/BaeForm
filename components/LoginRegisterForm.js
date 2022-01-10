import styles from './LoginRegisterForm.module.css'
import React from 'react'

export default function LoginRegisterForm() {
  return (
    <div>

<div id="formContainer" className="formContainer">

<form action="/api/u">
  <div className="form-group">
    <label htmlFor="InputFirstName">First Name</label>
    <input type="text" className="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Rudy" />
    <label htmlFor="InputLastName">Last Name</label>
    <input type="text" className="form-control" id="InputLastName" aria-describedby="emailHelp" placeholder="Quinternet" />
    <label htmlFor="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    </input>
  </div>
  <div className="form-group">
    <label htmlFor="InputRegisterEmail">Email address</label>
    <input type="email" className="form-control" id="InputRegisterEmail" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">(We'll never share your email with anyone else.)</small>
  </div>
  <div className="form-group">
    <label htmlFor="InputRegisterPassword">Password</label>
    <input type="password" className="form-control" id="InputRegisterPassword" placeholder="Password" />
    <label htmlFor="InputRegisterPasswordVerify">Password Verification</label>
    <input type="password" className="form-control" id="InputRegisterPasswordVerify" placeholder="Password" />
  </div>
  <button onClick={() => { }} className="btn btn-primary">Submit</button>
</form>
<br></br>
<br></br>
<br></br>
<br></br>
<form>
  <div className="form-group">
    <label htmlFor="InputLoginEmail">Email address</label>
    <input type="email" className="form-control" id="InputLoginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">(We'll never share your email with anyone else.)</small>
  </div>
  <div className="form-group">
    <label htmlFor="InputLoginPassword">Password</label>
    <input type="password" className="form-control" id="InputLoginPassword" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="Check" />
    <label className="form-check-label" htmlFor="Check">Check me out</label>
  </div>
  <button onClick={() => { console.log("pipou") }} className="btn btn-primary">Submit</button>
</form>

<br></br>
<button onClick={() => { }}>Password Forgot</button>
<button onClick={() => { flip("red"); }}>Create account</button>
<button onClick={() => { flip("red"); }}>I already have an account</button>

</div>
    </div>
  )
}
