import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = (props) => {
    return (
        <div>
            <header>
                <Navbar className='py-4' expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="/images/logo.svg" />
                        </Navbar.Brand>
                        <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="fl-nav__links me-0 ms-auto">
                            <Nav.Link className='fl-nav__link me-3' href="#home">Home</Nav.Link>
                            <Nav.Link className='fl-nav__link me-3' href="#link">Movies</Nav.Link>
                            <Nav.Link className='fl-nav__link me-3' href="#link">TV Shows</Nav.Link>
                            <Nav.Link className='fl-nav__link me-3' href="#link">Upcoming</Nav.Link>
                            <Nav.Link className='fl-nav__link me-0' href="#link">My Collections</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                {props.children}
            </main>
            <footer className='fl-section fl-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='fl-footer__col col-xl-3 mb-5'>
                            <div className='fl-footer__logo'>
                                <a><img src='/images/logo.svg' /></a>
                            </div>
                        </div>

                        <div className='fl-footer__col col-md-4 col-xl-3 mb-4 mb-lg-0'>
                            <div className='fl-footer__col-title'>All Links</div>
                            <ul className='fl-footer__col-inwrap'>
                                <li><a className='fl-footer__col-lnk'>Home</a></li>
                                <li><a className='fl-footer__col-lnk'>Movies</a></li>
                                <li><a className='fl-footer__col-lnk'>TV Shows</a></li>
                                <li><a className='fl-footer__col-lnk'>Upcoming</a></li>
                                <li><a className='fl-footer__col-lnk'>My Collections</a></li>
                            </ul>
                        </div>

                        <div className='fl-footer__col col-md-4 col-xl-3 mb-4 mb-lg-0'>
                            <div className='fl-footer__col-title'>Upcoming Movies</div>
                            <ul className='fl-footer__col-inwrap'>
                                <li><a className='fl-footer__col-lnk'>Shazam</a></li>
                                <li><a className='fl-footer__col-lnk'>Jhon wick</a></li>
                                <li><a className='fl-footer__col-lnk'>Fast 10</a></li>
                                <li><a className='fl-footer__col-lnk'>Flash</a></li>
                                <li><a className='fl-footer__col-lnk'>More</a></li>
                            </ul>
                        </div>

                        <div className='fl-footer__col col-md-4 col-xl-3'>
                            <div className='fl-footer__col-title'>Social Media</div>
                            <ul className='fl-footer__col-inwrap'>
                                <li><a className='fl-footer__col-lnk'>instagram</a></li>
                                <li><a className='fl-footer__col-lnk'>facebook</a></li>
                                <li><a className='fl-footer__col-lnk'>linkedin</a></li>
                                <li><a className='fl-footer__col-lnk'>twitter</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;