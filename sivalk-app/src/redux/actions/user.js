const loginAction = 'LOGIN';
const logoutAction = 'LOGOUT';

const doUserLogin = (userId) => {
    return {
        type: loginAction,
        payload: userId
    };

}

const logOutUser = () => {
    return {
        type: logoutAction
    }
}

export default {
    actionTypes: {
        loginAction,
        logoutAction
    },
    actionMethods: {
        doUserLogin: doUserLogin,
        logOutUser: logOutUser
    }
};
