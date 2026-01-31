import React, { useEffect, usestate } from 'react';

const UseEffectApi = () => {
    const [users, setUsers]=React.useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setUsers(data));
    }, []);
  return (
    <div>
        <ul>
            {users.map((user,index) => (
                <li key={index}>
                    <p>Name : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <p>Latitude  : {user.address?.geo?.lat}</p>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default UseEffectApi;
