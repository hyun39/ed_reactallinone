

import React, {useRef, useState, useMemo} from 'react'

import UserList from './UserList';
import CreateUser from './CreateUser'



function countActiveUsers(users){
  console.log("count");
  return users.filter( user => user.active ).length;
}



function App() {

  // usestate는 가상돔으로 관리를 하는 것이다.
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

  // useref로 계속 유지가 된다.
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

  // 아래와 같잉 하면 edit에서 변경이 될때마다 unchange 이벤트가 발생을 하고 이벤트가 발생을 할때마다 rerendering이 발생하면서 아래 함수가 호출이 된다. 
  // const activeUserCnt = countActiveUsers(users);

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
