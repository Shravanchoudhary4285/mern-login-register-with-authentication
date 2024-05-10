import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  const auth=localStorage.getItem("email")
  return (
    <>
    {
      auth?<><Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/user">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/user">Home</Nav.Link>
          <Nav.Link href="/logout">LogOut</Nav.Link>
        </Nav>
      </Container>
    </Navbar></>:<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    }
     
    </>
  );
}

export default Header;
