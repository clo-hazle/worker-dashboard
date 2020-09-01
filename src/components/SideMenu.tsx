// @flow
import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

type Props = {
  page: 'Home' | 'Task';
};

function SideMenu(props: Props): JSX.Element {
  const { page } = props;
  const menuItems: string[] = ['Home', 'Task'];

  return (
    <SideMenuBlock>
      {menuItems.map(menuItem => (
        <SideMenuItem key={menuItem}>
          <Link href={`/${menuItem !== 'Home' ? menuItem : ''}`}>
            <a className={page === menuItem ? 'active' : ''}>
              <object data={`/${menuItem}.svg`} type={'image/svg+xml'}>
                your browser does not support SVG
              </object>
            </a>
          </Link>
        </SideMenuItem>
      ))}
    </SideMenuBlock>
  );
}

export default SideMenu;

const SideMenuBlock = styled.ul`
  background: white;
  box-shadow: 0px -3px 14px rgba(118, 125, 134, 0.32);
  width: 120px;
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideMenuItem = styled.li`
  a {
    color: #767d86;
    opacity: 0.4;
    padding: 2rem 0;
    cursor: pointer;
    text-decoration: none;
    display: block;
    width: 100%;

    &.active {
      opacity: 1;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  //icon
  object {
    width: 20px;
    fill: inherit;
    pointer-events: none;
  }
`;
