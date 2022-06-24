// import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navi = () => {
  return (
    <>
      {/* <Link to="/">List of Trainers</Link>
      <br />
      <Link to="/EditList">Add or Update Trainer</Link>
      <br />
      <Link to="/DeleteTrainer">Delete a Trainer</Link>
      <br />
      <Link to="/FindTrainer">Find a Trainer</Link> */}
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">List of Trainers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/EditList">Add or Update Trainer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/DeleteTrainer">Delete a Trainer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/FindTrainer">Find a Trainer</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navi;
