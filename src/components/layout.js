import { Link, Outlet } from 'react-router-dom';

import '../styles/styles.css';
import Menu from './Menu';
import Dropdown from './dropown';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>
          <Link className='OilEssence'>Oil Essence</Link>
        </h1>
        {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <Dropdown />
        <Menu className='desktopMenu' />
      </header>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <footer>
        <h3>
          The Website Built By <span>Idan Haim</span>
        </h3>
      </footer>
    </div>
  );
}
