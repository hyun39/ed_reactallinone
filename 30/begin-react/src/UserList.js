import React, {useEffect} from 'react'



function User({user, onRemove, onToggle}){

    const {username,email, id, active} = user;

    // useEffect(()=>{

    //     console.log("컴포넌트가 화면에 나타남");
    //
    //     return () => {
    //         console.log("컴포넌트가 사라짐")
    //     }
    // }, []);

    useEffect(() => {
        // 마운트 ( 초기, 수정 후)
        console.log("값 설정");
        console.log(user)

        return () => {
            // unmound (수정 전)
            console.log("값 변경 전")
            console.log(user)
        }

        // 아래 파티미터가 들어가 있는 것을 기억해야 한다.
    }, [user]);


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