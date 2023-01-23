
import {useState} from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function  registerUser(event){
    event.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json() 
    console.log(data);
  }
  return (
    <div className="App">
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <input type ="text" placeholder ="Name"  value={name} onChange={(e)=>setName(e.target.value)}/> <br />
      <input type ="email" placeholder ="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
      <input type ="password" placeholder ="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
      <input type="submit" value ="Register" /> <br />
       
    </form>
    </div>
  );
}

export default App;
