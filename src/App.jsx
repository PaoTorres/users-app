import { useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
 const [users, setUsers]=useState ([]);
 const [userSelected, setUserSelected] = useState (null);


 //Este use Effect se ejecuta la primera vez que carga el formulario.
 useEffect ( ()=>{
    axios
        .get("https://users-crud1.herokuapp.com/users/")
        .then((res) => setUsers(res.data))
        .catch(error => console.log (error.response));
 }, [])
 
 const getUsers = ()=>{
    //Para obtener el listado de usuarios con axios.
    axios
    .get("https://users-crud1.herokuapp.com/users/")
    .then((res) => setUsers(res.data))
    .catch(error => console.log (error.response));
 }

 const selectUser =(user) =>{
  //alert (`Car seleccionado ${car.brand}`)
  setUserSelected (user);
}

const  deselectUser = () => setUserSelected (null);

  return (
    <div className="App">
        <h1>USERS APP</h1>
        <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>
        <UsersList getUsers={getUsers} users={users} selectUser={selectUser}/>
    </div>
  );
}

export default App
