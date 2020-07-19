import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './Header.scss';

function Header() {
  return (
    <div>
      <header className='header'>
        <Container>
          <Row className='justify-content-between'>
            <Col xs='auto'>
              <a
                href='https://youtube.com/easyfrontend'
                className='header__link header__title'
                target='_blank'
                rel='noopener noreferrer'
              >
                Easy Frontend
              </a>
            </Col>
            <Col xs='auto'>
              <NavLink
                exact
                to='/photos'
                className='header__link'
                activeClassName='header__link--active'
              >
                Redux Project
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
