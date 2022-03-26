import React from 'react'



function User({user, onRemove, onToggle}){

    const {username,email, id, active} = user;
    return (
        <div>
        <b 
            style={{
                color:active?'green':'black',
                    cursor:'pointer'
            }}
            onClick={() => onToggle(id)}
        >
            {username}
        </b>
        <span>({email})</span>
        <button onClick={() => onRemove(id)}>삭제하기</button>
    </div>
    );

}


function UserList({users, onRemove, onToggle}){

    return (

        /*
        <div> 
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>*/

        <div>{
            users.map(
                user => (<User user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>)
            )
        }
        </div>
    )
    }
    
 export default UserList;   