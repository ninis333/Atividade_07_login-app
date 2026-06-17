import './DefaultInput.css';

/**
 * DefaultInput
 * Input customizado com suporte a um ícone (lucide-react) posicionado
 * à esquerda. Recebe um componente de ícone via prop `icon`.
 *
 * Props:
 * - icon: componente de ícone (ex: Mail, Lock)
 * - demais props (type, placeholder, value, onChange, name, etc.)
 *   são repassadas diretamente para o elemento <input>.
 */
function DefaultInput({ icon: Icon, ...inputProps }) {
  return (
    <div className="default-input">
      {Icon && <Icon className="default-input__icon" aria-hidden="true" />}
      <input className="default-input__field" {...inputProps} />
    </div>
  );
}

export default DefaultInput;
