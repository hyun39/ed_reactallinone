

import React, {useRef, useState, useMemo} from 'react'

import UserList from './UserList';
import CreateUser from './CreateUser'



function countActiveUsers(users){
  return users.filter( user => user.active ).length;
}



function App() {

  const [inputs, setInputs] = new useState({
    username:'',
    email:'',
  });

  const {username, email, active} = inputs;

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
        email:'public.velopert.gmail..com',
        active:true
    },
    {
        id:2,
        username:'velopert2',
        email:'public.velopert2.gmail..com',
        active:false

    },
    {
        id:3,
        username:'velopert3',
        email:'public.velopert3.gmail..com',
        active:false
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
      email:'',
    });
    console.log(nextId.current);
    nextId.current+=1;
  };


  const onRemove = (id) => {
    console.log("onRemove" );
    setUsers(users.filter(user=>user.id!==id));
  };

  const onToggle = (id) => {

    console.log(users[0].active);

    setUsers(users.map(
      user=> user.id === id
        ? {...user,active:!user.active}:
        user
    ));
  };

  const activeUserCnt = useMemo( ()=>  countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        />

      <div>
        활성 사용자 수({activeUserCnt})
      </div>  
    </>
  );
}

export default App;
