import { IoIosMenu } from 'react-icons/io';
import Menu from './Menu';
import { useState } from 'react';
import '../../src/styles/layout.scss';

export default function Dropdown(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let menuClasses = 'dropdownMenu';

  if (isNavExpanded) {
    menuClasses += ' expanded';
  }
  return (
    <div className='dropdown'>
      <IoIosMenu
        className='menuButton'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />
      <Menu className={menuClasses} />
    </div>
  );
}
