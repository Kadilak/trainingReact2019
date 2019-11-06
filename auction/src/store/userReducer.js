import { LOG_IN_USER,LOG_OUT_USER } from "./userActions";

const initialUserState = {
    isAuth: false,
    user: {
        name: '',
        address: {}
    }
}

function userReducer(user = initialUserState, action) {
    switch (action.type) {
        case LOG_IN_USER:
            return {...user, isAuth: true}
        case LOG_OUT_USER:
            return {...user, isAuth: false}
        default:
            return user;
    }
}

export default userReducer;