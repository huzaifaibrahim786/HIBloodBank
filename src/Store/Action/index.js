import firebase from '../../Config/Firebase.js'
const set_user = (name,email,password,uid,isDonor,usertype)=>{
    return (dispatch) =>{
        dispatch({
            type:"SetUser",
            currentUsername:name,
            currentUseremail:email,
            password:password,
            isDonor:isDonor,
            uid:uid,
            usertype:usertype,
            hasUser:true
        })
    }
}

const signout = ()=>{
    return (dispatch) =>{
        dispatch({
            type:"SignOut",
            currentUsername:null,
            currentUseremail:null,
            password:null,
            isDonor:false,
            uid:null,
            usertype:null,
            hasUser:false
        })
    }
}

const settopic = (topic)=>{
    return (dispatch) =>{
        dispatch({
            type:"Topic",
            topic:topic
        })
    }
}





export {
    set_user,
    signout,
    settopic
}