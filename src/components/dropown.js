import { IoIosMenu } from 'react-icons/io';
import Menu from './Menu';
import { useState } from 'react';
import '../../src/styles/layout.scss';

export default function Dropdown(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  console.log(isNavExpanded);
  return (
    <div className='dropdown'>
      <IoIosMenu
        className='menuButton'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />
      <Menu
        id='dropdownMenu'
        className={'dropdownMenu'}
        style={isNavExpanded ? { display: 'block' } : { display: 'none' }}
      />
    </div>
  );
}
