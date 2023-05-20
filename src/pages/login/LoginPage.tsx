import React, {useState} from 'react';
import './LoginPage.css';
import { isEmailValid } from './../../helpers/EmailHelper';
import ValidationError from './../../components/validation-error/ValidationError';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import Loading from '../../components/loading/Loading';

type LoginPageProps = {
  authService: AuthService;
}

function LoginPage(props: LoginPageProps) {

  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: ""
    },
    password:{
      hasChanged: false,
      value: ""
    }
  })

  const [error, setError] = useState(null as any);
  const [showLoading, setShowLoading] = useState(false);

  const login = () => {
    setShowLoading(true);
    props.authService.login(
      form.email.value, form.password.value
    ).then(() => {
      setShowLoading(false);
      navigate('/home');
    }).catch(error => {
      setShowLoading(false);
      setError(error);
    });
  }

  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate('/register');
  }

  return (
   <main className='centralize'>
      <h1>Entrar</h1>
      <form>
        <input type="email" placeholder='Email' value={form.email.value}
          onChange={event => setForm({...form, email: {
          hasChanged: true, value: event.target.value}})}
        />

        <ValidationError
          hasChanged={form.email.hasChanged}
          errorMessage='O email é obrigatorio'
          testId='email-required'
          type='required'
          value={form.email.value}
        />

        <ValidationError
          hasChanged={form.email.hasChanged}
          errorMessage='O email é inválido'
          testId='email-invalid'
          type='email'
          value={form.email.value}
        />

        <input type="password" placeholder='Senha' value={form.password.value}
          onChange={event => setForm({...form, password: {
            hasChanged: true, value: event.target.value
          }})}
        />

        <ValidationError
          hasChanged={form.password.hasChanged}
          errorMessage='A senha é obrigatória'
          testId='password-required'
          type='required'
          value={form.password.value}
        />

        {error && <div className='error' data-testid="error">{error.message}</div>}

        <button type="button" className= 'solid'
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}
          onClick={login}>
          Entrar
        </button>

        <button type="button"
         className='outline'
         onClick={goToRegisterPage}>
          Registrar
        </button>
      </form>
      { showLoading && <Loading /> }
   </main>
  );
}

export default LoginPage;
