import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

// import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav className="w-100" navbar>
        <NavItem className="text-right">
          2020 KEPCO Data Sience Lab.
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
