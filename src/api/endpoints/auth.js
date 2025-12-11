import client from '../client';

const AuthAPI = {
    login: (payload) => {
        const formData = new URLSearchParams();
        formData.append("email", payload.email);
        formData.append("password", payload.password);

        return client.post("/login", formData, {
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            }
        })
    },
}

export default AuthAPI