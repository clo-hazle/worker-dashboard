import * as React from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import TodoContent from '../components/TodoContent';
import WorkTimeContent from '../components/WorkTimeContent';
import CalendarContent from '../components/CalendarContent';

export default function Home() {
  return (
    <Layout>
      <SideMenu page={'Home'} />
      <Contents>
        <WorkTimeContent />
        <TodoContent />
        <WorkTimeContent />
        <CalendarContent />
      </Contents>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 3rem;
  gap: 2rem;
`;
