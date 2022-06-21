import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">List of Trainers</Link>
      <br />
      <Link to="/EditList">Add or Update Trainer</Link>
      <br />
      <Link to="/DeleteTrainer">Delete a Trainer</Link>
      <br />
      <Link to="/FindTriner">Find a Trainer</Link>
    </>
  );
};

export default Nav;
