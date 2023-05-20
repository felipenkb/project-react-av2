import React, {useState} from 'react';
import './RegisterPage.css';
import { isEmailValid } from './../../helpers/EmailHelper';
import ValidationError from './../../components/validation-error/ValidationError';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import Loading from '../../components/loading/Loading';

type RegisterPageProps = {
    authService: AuthService;
  }

function RegisterPage(props: RegisterPageProps) {

    const [form, setForm] = useState({
        email: {
          hasChanged: false,
          value: ""
        },
        password: {
          hasChanged: false,
          value: ""
        }
      })
    
      const [error, setError] = useState(null as any);
      const [showLoading, setShowLoading] = useState(false);
    
      const register = () => {
        setShowLoading(true);
        props.authService.register(
          form.email.value, form.password.value
        ).then(() => {
          setShowLoading(false);
          navigate('/');
        }).catch(error => {
          setShowLoading(false);
          setError(error);
        });
      }
    
      const navigate = useNavigate();

    return (
        <main className='centralize'>
           <h1>Register</h1>
           <form>
             <input type="email" placeholder='Email' value={form.email.value}
               onChange={event => setForm({...form, email: {
               hasChanged: true, value: event.target.value
               }})}
               data-testid='email'
             />
     
             <ValidationError
               hasChanged={form.email.hasChanged}
               errorMessage='Email é Obrigatorio'
               testId='email-required'
               type='required'
               value={form.email.value}
             />
     
             <ValidationError
               hasChanged={form.email.hasChanged}
               errorMessage='Email é invalido'
               testId='email-invalid'
               type='email'
               value={form.email.value}
             />
     
             <input type="password" placeholder='Senha' value={form.password.value}
               onChange={event => setForm({...form, password: {
                 hasChanged: true, value: event.target.value
               }})}
               data-test-id="password"
             />
     
             <ValidationError
               hasChanged={form.password.hasChanged}
               errorMessage='Senha é obrigatoria'
               testId='password-required'
               type='required'
               value={form.password.value}
             />
     
             {error && <div className='error' data-testid="error">{error.message}</div>}
     
             <button type="button" className= 'solid'
               data-testid="register-button"
               disabled={!isEmailValid(form.email.value) || !form.password.value }
               onClick={register}>
               Registrar
             </button>
           
           </form>
           { showLoading && <Loading /> }
        </main>
       );
}

export default RegisterPage;