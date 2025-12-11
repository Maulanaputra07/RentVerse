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

    register: (payload) => {
        const formData = new URLSearchParams();
        formData.append("fullname", payload.fullName)
        formData.append("email", payload.email)
        formData.append("password", payload.password)
        formData.append("role", payload.role)

        return client.post("/register", formData, {
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            }
        })
    },
}

export default AuthAPI