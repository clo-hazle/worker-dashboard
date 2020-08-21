// @flow
import * as React from 'react';
import Link from 'next/link';

type Props = {
  page: 'Home' | 'Task';
};

function SideMenu(props: Props): JSX.Element {
  const { page } = props;
  const menuItems: string[] = ['Home', 'Task'];

  return (
    <ul className={'sideMenu'}>
      {menuItems.map(menuItem => (
        <li key={menuItem}>
          <Link href={`/${menuItem !== 'Home' ? menuItem : ''}`}>
            <a className={page === menuItem ? 'active' : ''}>
              <object data={`/${menuItem}.svg`} type={'image/svg+xml'}>
                your browser does not support SVG
              </object>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideMenu;
