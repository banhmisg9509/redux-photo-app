import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

function Header() {
  return (
    <div>
      <header className='header'>
        <Container>
          <Row className='justify-content-between'>
            <Col xs='auto'>
              <a
                href='https://www.facebook.com/banhmisgUIT'
                className='header__link header__title'
                target='_blank'
                rel='noopener noreferrer'
              >
                banhmisgUIT
              </a>
            </Col>
            <Col xs='auto'>
              <NavLink
                exact
                to='/sign-in'
                className='header__link'
                activeClassName='header__link--active'
              >
                Sign In
              </NavLink>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
