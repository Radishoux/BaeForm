import styles from './LoginRegisterForm.module.css'
import React from 'react'

export default function LoginRegisterForm() {
  return (
    <div>

      <div id="formContainer" className="formContainer">

        <div className={styles.signUpForm}>
          <div className="form-group">
            <div className={styles.formInput}>
              <label htmlFor="InputFirstName">First Name : </label>
              <input type="text" className="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Rudy" />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="InputLastName">Last Name : </label>
              <input type="text" className="form-control" id="InputLastName" aria-describedby="emailHelp" placeholder="Quinternet" />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="birthday">Birthday : </label>
              <input type="date" id="birthday" name="birthday" />
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInput}>
              <label htmlFor="InputRegisterEmail">Email address : </label>
              <input type="email" className="form-control" id="InputRegisterEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className={styles.small}>(We'll never share your email with anyone else.)</small>
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInput}>
              <label htmlFor="InputRegisterPassword">Password : </label>
              <input type="password" className="form-control" id="InputRegisterPassword" placeholder="Password" />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="InputRegisterPasswordVerify">Password Verification : </label>
              <input type="password" className="form-control" id="InputRegisterPasswordVerify" placeholder="Password" />
            </div>
          </div>
          <button onClick={() => { }} className={styles.submitBtn}>Submit</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.signInForm}>
          <div className="form-group">
            <div className={styles.formInput}>
              <label htmlFor="InputLoginEmail">Email address : </label>
              <input type="email" className="form-control" id="InputLoginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className={styles.small}>(We'll never share your email with anyone else.)</small>
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInput}>
              <label htmlFor="InputLoginPassword">Password : </label>
              <input type="password" className="form-control" id="InputLoginPassword" placeholder="Password" />
            </div>
          </div>
          <div className="form-group form-check">
            <div className={styles.formInput}>
              <p className={styles.formCheckP} htmlFor="Check">Remember me?</p>
              <input type="checkbox" className={styles.formCheckInput} id="Check" />
            </div>
          </div>
          <button onClick={() => { console.log("pipou") }} className={styles.submitBtn}>Submit</button>
        </div>

        <br></br>
        <button onClick={() => { }}>Password Forgot</button>
        <button onClick={() => { flip("red"); }}>Create account</button>
        <button onClick={() => { flip("red"); }}>I already have an account</button>

      </div>
    </div >
  )
}
