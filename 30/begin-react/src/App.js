

import React, {useRef, useState} from 'react'

import UserList from './UserList';
import CreateUser from './CreateUser'

function App() {

  const [inputs, setInputs] = new useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const [users, setUsers] = useState([
    {
        id:1,
        username:'velopert',
        email:'public.velopert.gmail..com'
    },
    {
        id:2,
        username:'velopert2',
        email:'public.velopert2.gmail..com'

    },
    {
        id:3,
        username:'velopert3',
        email:'public.velopert3.gmail..com'
    }        
]);

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id:nextId.current,
      username,
      email
    };
     
    setUsers([...users,user]);

    //setUsers(users.concat(user));


    setInputs({
      username:'',
      email:''
    });
    console.log(nextId.current);
    nextId.current+=1;
  }


  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate} />
    <UserList users={users}/>
    </>
  );
}

export default App;
