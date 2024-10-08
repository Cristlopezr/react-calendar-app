import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};

const registerFormFields = {
    registerEmail: '',
    registerName: '',
    registerPassword: '',
    registerPassword2: '',
};

export const LoginPage = () => {
    const { startLogin, errorMessage, startRegister } = useAuthStore();

    const {
        loginEmail,
        loginPassword,
        onInputChange: onLoginInputChange,
    } = useForm(loginFormFields);
    const {
        registerEmail,
        registerName,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange,
    } = useForm(registerFormFields);

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Authentication Error', errorMessage, 'error');
        }
    }, [errorMessage]);

    const onLoginSubmit = event => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    };

    const onRegisterSubmit = event => {
        event.preventDefault();
        if (registerPassword !== registerPassword2)
            return Swal.fire('Authentication Error', "The passwords don't match", 'error');
        startRegister({ name: registerName, password: registerPassword, email: registerEmail });
    };

    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3>Ingreso</h3>
                    <form onSubmit={onLoginSubmit}>
                        <div className='form-group mb-2'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Correo'
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Contraseña'
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input type='submit' className='btnSubmit' value='Login' />
                        </div>
                    </form>
                </div>

                <div className='col-md-6 login-form-2'>
                    <h3>Registro</h3>
                    <form onSubmit={onRegisterSubmit}>
                        <div className='form-group mb-2'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre'
                                name='registerName'
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Correo'
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Contraseña'
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Repita la contraseña'
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input type='submit' className='btnSubmit' value='Crear cuenta' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
