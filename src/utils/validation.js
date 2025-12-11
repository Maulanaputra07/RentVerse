export const validateLogin = ({ email, password }) => {
    if (!email) return { field: "email", message: "Email wajib diisi" };
    if (!password) return { field: "password", message: "Password wajib diisi" };
    if (password.length < 6) return { field: "password", message: "Password minimal 6 karakter" };
    return null;
};

export const validateRegister = ({ fullName, email, password, confirmPassword, role }) => {
    if (!fullName) return { field: "fullName", message: "Wajib mengisikan nama"};
    if (!email) return { field: "email", message: "Email wajib diisi" };
    if (!password) return { field: "password", message: "Password wajib diisi" };
    if (password.length < 6) return { field: "password", message: "Password minimal 6 karakter" };
    if (!confirmPassword) return { field: "confirmPassword", message: "Konfirmasi password wajib diisi" };
    if (password !== confirmPassword) return { field: "confirmPassword", message: "Password tidak cocok" };
    if (!role) return { field: "role", message:"Role belum dipilih"};
    return null;
};
