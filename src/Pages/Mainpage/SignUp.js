import style from "./SignUp.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignUp() {
 const nav = useNavigate()
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  const handleLogin = ()=>{
   nav("/Component")
  }

  function handleSignUp(e) {
    e.preventDefault()
    if(email=== "" || password === ""){
      alert("Please fill the inputs")
    }else{
      const userData = {
        email,password
      }
      localStorage.setItem("userData" , JSON.stringify(userData))
      alert(`${userData.email} you are logged in`)
      nav("/dashboard")
    }
  }
  return (
    <div className={style.SectionBox}>
      <div className={style.leftSection}>
        <span>Board.</span>
      </div>

      <div className={style.rightSection}>
        <div className={style.headingSection}>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>

        <div className={style.buttonSection}>
          <button onClick={handleLogin}>
            <FcGoogle className={style.googleIcon} />{" "}
            <span>Sign in with Google</span>
          </button>
          <button>
            <GrApple className={style.appleIcon} />{" "}
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className={style.formSection}>
          <form>
            <div>
              <label type="email" htmlFor="email">
                Email address
              </label>
              <input onChange={(e)=>setEmail(e.target.value)} placeholder="jhondoe@gmail.com" />
            </div>
            <div>
              <label type="password" htmlFor="password">
                Password
              </label>
              <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <div className={style.forgotText}>
              <label>Forgot password?</label>
            </div>
            <button onClick={handleSignUp} className={style.btn}>Sign In</button>
          </form>
        </div>

        <div className={style.register}>
        <p>Don't have an account? <span>Register here</span></p>
        </div>
      </div>
    </div>
  );
}
