const loginAction = 'LOGIN';

const doUserLogin = (userId) => {
    return {
        type: loginAction,
        payload: userId
    };
}

