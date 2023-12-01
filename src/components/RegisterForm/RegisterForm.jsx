import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'store';
import {
  RegisterFormWrap,
  RegisterFormInput,
  RegisterFormInputNote,
  RegisterFormLabel,
  RegisterFormNote,
  RegisterFormSubmit,
  Wrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      auth.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <RegisterFormWrap onSubmit={handleSubmit}>
        <RegisterFormLabel>
          Name
          <RegisterFormInput
            type="text"
            name="name"
            minLength="2"
            maxLength="22"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name must consist only one word and may contain only letters, apostrophe, dash and no one space."
            placeholder="Name *"
            required
            value={name}
            onChange={e => setName(e.target.value.trim())}
          />
          <RegisterFormInputNote>one word & no one space</RegisterFormInputNote>
        </RegisterFormLabel>
        <RegisterFormLabel>
          E-mail
          <RegisterFormInput
            type="email"
            name="email"
            minLength="14"
            // maxLength="22"
            autoComplete="username"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            placeholder="E-mail *"
            required
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          />
          <RegisterFormInputNote>min 14 symbols</RegisterFormInputNote>
        </RegisterFormLabel>
        <RegisterFormLabel>
          Password
          <RegisterFormInput
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
          <RegisterFormInputNote>min 7 max 22 symbols</RegisterFormInputNote>
          <RegisterFormNote>* is required</RegisterFormNote>
        </RegisterFormLabel>
        <RegisterFormSubmit type="submit">Sign Up</RegisterFormSubmit>
      </RegisterFormWrap>
    </Wrapper>
  );
};
