const INITIAL_SATE = {
    default:"huzaifa123",
    hasUser:false,
    isDonor:false,
    password:null,
    currentUsername:null,
    currentUseremail:null,
    topic:null,
    photoURL:null,
    usertype:null,
    uid:null
    
}

export default (state = INITIAL_SATE,action)=>{
    switch(action.type){
        case "SetUser":
            return({
                ...state,
                currentUsername:action.currentUsername,
                currentUseremail:action.currentUseremail,
                password:action.password,
                isDonor:action.isDonor,
                uid:action.uid,
                usertype:action.usertype,
                hasUser:action.hasUser
            })
        case "SignOut":
            return({
                    ...state,
                    currentUsername:action.currentUsername,
                    currentUseremail:action.currentUseremail,
                    photoURL:action.photoURL,
                    password:action.password,
                    isDonor:action.isDonor,
                    uid:action.uid,
                    usertype:action.usertype,
                    hasUser:action.hasUser
            })

        case "Topic":
            return({
                ...state,
                topic:action.topic
            })
        
        default:
            return state;
    }
}
