import { IoIosMenu } from 'react-icons/io';
import Menu from './Menu';
import { useState } from 'react';
import '../../src/styles/layout.scss';

export default function Dropdown(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let menuClasses = 'dropdownMenu';
  let buttonClass = 'menuButton';

  if (isNavExpanded) {
    menuClasses += ' expanded';
    buttonClass += ' expanded';
  }
  return (
    <div className='dropdown'>
      <IoIosMenu
        className={buttonClass}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />
      <Menu className={menuClasses} />
    </div>
  );
}
