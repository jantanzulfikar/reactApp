import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // called when the user attempts to log in
    console.log("STARTING+++---")
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        console.log("GET PARM ++--")
        console.log("userName : " + username);
        console.log("password : " + password);
        const request = new Request('https://monitoring-api.herokuapp.com/api/v1/user/loginAdmin', {
            method: 'OPTIONS',
            body: JSON.stringify({ username, password }),
             headers: new Headers({'Authorization': 'ApiAuth api_key=DMA128256512AI'
             ,'Access-Control-Allow-Origin':'*' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }   
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};