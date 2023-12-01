import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'store';
import {
  LogInFormWrap,
  LogInFormInput,
  LogInFormInputNote,
  LogInFormLabel,
  LogInFormNote,
  LogInFormSubmit,
  Wrapper,
} from './LogInForm.styled';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      auth.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <LogInFormWrap onSubmit={handleSubmit}>
        <LogInFormLabel>
          E-mail
          <LogInFormInput
            type="email"
            name="email"
            minLength="7"
            // maxLength="22"
            autoComplete="username"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            placeholder="E-mail *"
            required
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          />
        </LogInFormLabel>
        <LogInFormLabel>
          Password
          <LogInFormInput
            type="password"
            // type="text"
            name="password"
            minLength="7"
            maxLength="22"
            title="The password must be min 7 and max 22 symbols"
            placeholder="Password * "
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <LogInFormInputNote>min 7 max 22 symbols</LogInFormInputNote>
          <LogInFormNote>* is required</LogInFormNote>
        </LogInFormLabel>
        <LogInFormSubmit type="submit">Log In</LogInFormSubmit>
      </LogInFormWrap>
    </Wrapper>
  );
};
