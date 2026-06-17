import './DefaultButton.css';

/**
 * DefaultButton
 * Botão customizado de largura total, utilizado para as ações
 * principais do formulário (ex: "Entrar").
 *
 * Props:
 * - children: conteúdo/texto do botão
 * - type: tipo do botão (default: "button")
 * - demais props (onClick, disabled, etc.) são repassadas ao <button>
 */
function DefaultButton({ children, type = 'button', ...buttonProps }) {
  return (
    <button className="default-button" type={type} {...buttonProps}>
      {children}
    </button>
  );
}

export default DefaultButton;
