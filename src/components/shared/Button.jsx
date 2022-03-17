import PropTypes from 'prop-types';

function Button({ children, type, version, reverse, flat }) {
  return (
    <button
      className={`btn ${version} ${reverse && 'reverse'} ${flat && 'flat'}`}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  reverse: false,
  flat: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  reverse: PropTypes.bool,
  flat: PropTypes.bool,
};

export default Button;
