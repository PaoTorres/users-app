import axios from 'axios';
import React from 'react';
import '../App.css'

const UsersList = ({getUsers, users, selectUser}) => {

const deleteUser = (id) =>{
    alert(`Entro a eliminar ${id}`);
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
         .then(() =>getUsers());
}         
         
    return (
        <div className='list-ctn'>
          
           
                {users.map((user)=> (
                        <li key={user.id}>
                            <div className="card">
                                <div>
                                    <b className='column1'>  Email:</b>
                                    {user.email}
                                </div> 
                                <div>
                                    <b className='column1'>  First Name:</b>
                                    {user.first_name}
                                </div> 
                                <div>
                                    <b className='column1'>  Last Name:</b>
                                    {user.last_name}
                                    </div> 
                                <div>
                                    <b className='column1'>  Birthday:</b>
                                    {user.birthday}
                                </div> 
                                <button onClick={() => selectUser(user)}>Edit</button>
                                <button onClick={() => deleteUser (user.id)} type="button">Delete</button>
                            </div>
                        </li>
                    )
                )}
           
        </div>
    );
};

export default UsersList;