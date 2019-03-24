import jsonPlaceholder from '../api/jsonPlaceholder'

export const getUsers = () => async dispatch => {
    const res = await jsonPlaceholder.get('/users');

    dispatch({ type: 'GET_USERS', payload: res.data });
};

export const getDetails = (user) => {
    return {
        type: 'GET_DETAILS',
        payload: user
    }
}
