import {useState} from "react"

export const Login=()=>{
    const [firstName , setFirstName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [lastName , setLastName] = useState('');
    const handleSubmit=(e)=>{
        const form=e.target.value;
    }


    return(
    <div className="container-fluid">
  <form onSubmit={(e) => {handleSubmit(e)}}>
    <h3> Sign-up Form </h3>
    <img src="/gfg.png" alt="image1" /> <br/>
        <label>
          First Name:
        </label><br/>
        <input type="text" value={firstName} required onChange={(e)=>{setFirstName(e.target.value);}} /><br/>
         
        <label >
          Last Name:
        </label><br/>
        <input type="text" value={lastName} required onChange={(e)=>{setLastName(e.target.value)}} /><br/>
            
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
         
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
             
        <label>
         
        </label><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>

    )
}