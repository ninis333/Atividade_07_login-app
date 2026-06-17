import './MainForm.css';

/**
 * MainForm
 * Card que envolve o formulário de login. Centraliza a largura
 * máxima, o espaçamento interno e o espaçamento (gap) entre
 * os elementos filhos (inputs, botão, links etc).
 */
function MainForm({ children, onSubmit }) {
  return (
    <form className="main-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default MainForm;
