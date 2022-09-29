import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <ul className={props.className}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/store'>Store</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
}

export default Menu;
