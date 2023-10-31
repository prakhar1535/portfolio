import { Collapse } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


const Collapsed = styled.div`
display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'visible')};
`
const Nav = styled.nav`
background-color: rgba(255,255,255,0.15);
border-radius: 10px;
border: 2px solid white;
backdrop-filter: blur(50.5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-bottom: 10px;
    }

    ul {
      width: 100%;
      padding: 0;
      background-color: #444;
      display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'flex')};
      flex-direction: column;
      text-align: center;

      li {
        margin: 10px 0;
      }
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 50px;
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Nav isCollapsed={isCollapsed}>
      <h1>Ps.</h1>
      {
        
        <Collapsed onClick={toggleCollapse}>c</Collapsed>
}
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
