import './Container.css';

/**
 * Container
 * Wrapper responsável por centralizar o conteúdo da tela
 * horizontal e verticalmente, ocupando toda a altura da viewport.
 */
function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;
