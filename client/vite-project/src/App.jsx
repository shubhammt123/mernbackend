import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [user ,   setUser] = useState([]);

  async function fetchData(){
   try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUser(data);
   } catch (error) {
    console.log(error)
   }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("On Submit Event Called");
    try {
      const response = await fetch("http://localhost:3000/create-user" ,{ method:"POST", headers :  {
        "Content-Type" : "application/json"
      } ,body : JSON.stringify({userName , email})});
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">User Name</label>
        <input type="text" placeholder='User Name' onChange={(e)=>{
          setUserName(e.target.value)
        }}  />
        </div>
       <div>
       <label htmlFor="">Email</label>
       <input type="email" placeholder='Email' onChange={(e)=>{
          setEmail(e.target.value)
        }}  />
       </div>
        <button >Create User</button>
      </form>
      <div>
        {user.map((item)=>{
          return (
            <div>
              <h3>{item.userName}</h3>
              <p>{item.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
