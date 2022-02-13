import styles from './LoginRegisterForm.module.css'
import React from 'react'

export default function LoginRegisterForm() {

  function hideform(formId) {
    document.getElementById(formId).className = styles.hiddenform;
    setTimeout(() => {
      document.getElementById(formId).style.display = 'none';
    }, 1000);
  }

  function showform(formId) {
    document.getElementById(formId).style.display = 'block';
    setTimeout(() => {
      document.getElementById(formId).className = styles.shownform;
    }, 100);
  }

  function isEmail(str) {
    if (str.indexOf('@') == -1) {
      return false;
    }
    if (str.indexOf('.') == -1) {
      return false;
    }
    return true;
  }

  function signIn() {
    if (!isEmail(document.getElementById("InputLoginEmail").value)) {
      alert("Please enter a valid email address");
      return;
    }

    fetch('/api/u', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": document.getElementById("InputRegisterEmail").value,
        "password": document.getElementById("InputRegisterPassword").value
      })
    })
      .then(postres => postres.text())
      .then(postres => console.log(postres))
  }

  function signUp() {
    if (document.getElementById("InputLastName").value.length < 1) {
      alert("Please enter your last name");
      return;
    }

    if (document.getElementById("InputFirstName").value.length < 1) {
      alert("Please enter your first name");
      return;
    }

    if (!isEmail(document.getElementById("InputRegisterEmail").value)) {
      alert("Please enter a valid email address");
      return;
    }

    if (document.getElementById("InputRegisterPassword").value && document.getElementById("InputRegisterPasswordConfirm").value && document.getElementById("InputRegisterPassword").value === document.getElementById("InputRegisterPasswordConfirm").value) {
      fetch('/api/u', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": document.getElementById("InputRegisterEmail").value,
          "lastName": document.getElementById("InputLastName").value,
          "firstName": document.getElementById("InputFirstName").value,
          "password": document.getElementById("InputRegisterPassword").value
        })
      })
        .then(postres => postres.text())
        .then(postres => console.log(postres))
    }
    else {
      alert("Passwords do not match")
    }
  }

  return (
    <div>

      <div id="formContainer" className="formContainer">

        <div id='signUpForm' className={styles.hiddenform} style={{display:"none"}}>
          <div className="form-group">
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputFirstName">First Name : </label>
              <input type="text" className={styles.formInput} id="InputFirstName" aria-describedby="emailHelp" placeholder="Rudy" />
            </div>
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputLastName">Last Name : </label>
              <input type="text" className={styles.formInput} id="InputLastName" aria-describedby="emailHelp" placeholder="Quinternet" />
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputRegisterEmail">Email address : </label>
              <input type="email" className={styles.formInput} id="InputRegisterEmail" aria-describedby="emailHelp" placeholder="email@email.com" />
              <small id="emailHelp" className={styles.small}>(We'll never share your email with anyone else.)</small>
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputRegisterPassword">Password : </label>
              <input type="password" className={styles.formInput} id="InputRegisterPassword" placeholder="Password" />
            </div>
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputRegisterPasswordConfirm">Password Verification : </label>
              <input type="password" className={styles.formInput} id="InputRegisterPasswordConfirm" placeholder="Password" />
            </div>
          </div>
          <button onClick={() => { signUp() }} className={styles.submitBtn}>Sign-up</button>
          <button className={styles.submitBtn} onClick={() => { hideform("signUpForm"); setTimeout(() => {showform("signInForm")}, 1000);}}>I already have an account</button>
        </div>
        <div id='signInForm' className={styles.shownform}>
          <div className="form-group">
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputLoginEmail">Email address : </label>
              <input type="email" className={styles.formInput} id="InputLoginEmail" aria-describedby="emailHelp" placeholder="email@email.com" />
              <small id="emailHelp" className={styles.small}>(We'll never share your email with anyone else.)</small>
            </div>
          </div>
          <div className="form-group">
            <div className={styles.formInputDiv}>
              <label  className={styles.formLabel} htmlFor="InputLoginPassword">Password : </label>
              <input type="password" className={styles.formInput} id="InputLoginPassword" placeholder="Password" />
            </div>
          </div>
          <button onClick={() => { signIn() }} className={styles.submitBtn}>Sign-in</button>
          {/* <button className={styles.submitBtn} onClick={() => { }}>Password Forgot</button> */}
          <button className={styles.submitBtn} onClick={() => { hideform("signInForm"); setTimeout(() => {showform("signUpForm")}, 1000);}}>Create account</button>
        </div>

        <br></br>

      </div>
    </div >
  )
}
