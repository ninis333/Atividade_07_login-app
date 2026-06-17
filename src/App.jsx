import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import './styles/global.css';

import Container from './components/Container';
import MainForm from './components/MainForm';
import DefaultInput from './components/DefaultInput';
import DefaultButton from './components/DefaultButton';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui entraria a chamada de autenticação real.
    console.log('Login enviado:', { email, password });
  }

  return (
    <Container>
      <MainForm onSubmit={handleSubmit}>
        <h1 className="form-title">Bem-vindo de volta</h1>

        <DefaultInput
          icon={Mail}
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <DefaultInput
          icon={Lock}
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <DefaultButton type="submit">Entrar</DefaultButton>
      </MainForm>
    </Container>
  );
}

export default App;
