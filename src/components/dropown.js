import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import Menu from './Menu';

export default function Dropdown(props) {
  const [display, setDisplay] = useState('none');
  function handleClick() {
    console.log('just clicked');
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  return (
    <div className='dropdown'>
      <IoIosMenu className='menuButton' onClick={handleClick} />
      <Menu id='dropdownMenu' className='dropdownMenu' display={display} />
    </div>
  );
}