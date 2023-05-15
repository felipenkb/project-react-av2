import React, {useState} from 'react';
import './App.css';
import { isEmailValid } from './helpers/EmailHelper';
import ValidationError from './components/validation-error/ValidationError';

function App() {

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

  return (
   <main className='centralize'>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder='Email' value={form.email.value}
          onChange={event => setForm({...form, email:{
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

        <button type="button" className= 'solid'
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}>
          Entrar
        </button>

        <button type="button" className='outline'>
          Registrar
        </button>

      </form>
   </main>
  );
}

export default App;
