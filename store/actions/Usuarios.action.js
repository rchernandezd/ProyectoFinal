export const SELECT_USUARIO = 'SELECT_USUARIO';

export const selectUsuario = (email) => ({
    type: 'SELECT_USUARIO',
    email: email
})
