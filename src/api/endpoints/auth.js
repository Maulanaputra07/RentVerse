import client from '../client';

const AuthAPI = {
    login: (payload) => client.post("/login", payload),
}

export default AuthAPI