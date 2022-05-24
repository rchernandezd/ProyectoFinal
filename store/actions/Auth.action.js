import { URL_AUTH_SIGNIN } from '../../constants/Database'
import { URL_AUTH_SIGNUP } from '../../constants/Database'

export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const ERROR = 'ERROR'
export const INGRESAR_INVITADO = 'INGRESAR_INVITADO'
export const SELECT_USUARIO = 'SELECT_USUARIO'

export const loadInvitado = (ingresarInvitado) => ({
    type: INGRESAR_INVITADO,
    ingresarInvitado: ingresarInvitado
})

export const signup = (email, password) => {
    console.log('URL_AUTH_SIGNUP: ' + URL_AUTH_SIGNUP)
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        })

        if(!response.ok) {
            const errorResponse =  await response.json()
            const errorID = errorResponse.error.message
            console.log(email);
            console.log(password);
            console.log(errorID);
            let message = 'No se ha podido registrar'
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado'
            throw new Error(message)
        }

        const data = await response.json()
        console.log("Dispatching SIGNUP");
        console.log(data);
        dispatch({ 
            type: SIGNUP,
            token: data.idToken,
            user: data.email
        })
    }
}

export const signin = (email, password) => {
    console.log('URL_AUTH_SIGNIN: ' + URL_AUTH_SIGNIN)
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGNIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })
            if(!response.ok) {
                const errorResponse =  await response.json()
                const errorID = errorResponse.error.message
                console.log(email);
                console.log(password);
                console.log(errorID);
                let message = 'No se ha podido validar'
                if (errorID === 'EMAIL_NOT_FOUND') 
                    message = 'Este email no está registrado'
                else
                    if (errorID == 'INVALID_PASSWORD')
                        message = 'Password no es correcto'
                    else   
                        if (errorID == 'USER_DISABLED')
                            message = 'Usuario dehabilitado'
                console.log(message);
                throw new Error(message)
            }
            const data = await response.json()
            console.log("Dispatching SIGNIN");
            console.log(data);
            dispatch({ 
                type: SIGNIN,
                token: data.idToken,
                user: data.email,
                ingresarInvitado: false,
                sesionActiva: true
            })
            // dispatch({
            //     type: SELECT_USUARIO,
            //     email: data.email
            // })
        }
        catch(e) {
            console.log('Error en Action: ' + e);
            throw new Error(e.message);
            // dispatch({ 
            //     type: ERROR,
            //     messageError: e.message
            // })
        }
    }
}