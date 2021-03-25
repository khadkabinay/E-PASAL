import React from 'react'
import {Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">E-Pasal</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/cart">Cart</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
