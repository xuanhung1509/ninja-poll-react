import './Button.scss';

function Button({ children, type, variant }) {
  return (
    <button type={type} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
