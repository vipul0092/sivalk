import actions from '../actions/user';

const initialUserState = {
    userId: '',
    isLoggedIn: false,
    hasLoginErrorred: false
};

const userLogin = (state = initialUserState, action) => {
    let { payload } = action;

    switch (action.type) {
        case actions.actionTypes.loginAction:
            return Object.assign({}, ...state, {
                userId: payload,
                isLoggedIn: true
            });
        case actions.actionTypes.logoutAction:
            return Object.assign({}, ...state, {
                userId: '',
                isLoggedIn: false
            });
        default:
            return state;
    }
}

export default {
    userLogin
};