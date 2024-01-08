import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={""} />
      </Routes>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Button variant="outline-info">Login</Button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default App;
