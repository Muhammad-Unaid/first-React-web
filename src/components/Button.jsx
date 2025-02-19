const Button = ({ lable }) => {
    const buttonStyle = {
      padding: '0.8em 1.8em',
      border: '2px solid #17C3B2',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '16px',
      transition: '0.3s',
      zIndex: 1,
      fontFamily: 'inherit',
      color: '#17C3B2',
      cursor: 'pointer'
    };
  
    const beforeStyle = {
      content: '""',
      width: '0',
      height: '300%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      background: '#17C3B2',
      transition: '0.5s ease',
      display: 'block',
      zIndex: -1
    };
  
    const handleMouseEnter = (e) => {
      e.target.firstChild.style.width = '105%';
      e.target.style.color = '#111';
    };
  
    const handleMouseLeave = (e) => {
      e.target.firstChild.style.width = '0';
      e.target.style.color = '#17C3B2';
    };
  
    return (
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={beforeStyle}></span>
        {lable}
      </button>
    );
  };
  
  export default Button;