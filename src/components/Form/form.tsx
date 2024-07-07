import { FormEvent, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import './form.css';

export default function Form() {
  const [errorMsg, setErrorMsg] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyFields = (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMsg('Woops, something is wrong, try again later!');
      return;
    }
    
  }

    return(
      <div>
        <p>{errorMsg}</p>
        <form onSubmit={(e) =>verifyFields(e)}>
          <img src={logo} alt="logo" />
          <h2>Login into your account</h2>

          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" onChange={({ target }) => setEmail(target.value)} data-testid="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={({ target }) => setPassword(target.value)} data-testid="password" />
          <a href="#">Forgot your password?</a>

          <button type="submit">Login Now</button>

          <span>
            <hr /> <p>OR</p> <hr />
          </span>
          
          <button type="button">Signup Now</button>
        </form>
      </div>

    );
}