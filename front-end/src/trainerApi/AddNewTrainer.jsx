import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddNewTrainer = ({ getData, fetchData }) => {
  //3 states
  //name
  //age
  // specialism
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [special, setSpecial] = useState();
  //and id now:
  const [id, setId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4494/trainers/create", {
        _id: id,
        name: name,
        age: age,
        specialism: special,
      })
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          getData(!fetchData);
          console.log("loading");
        }, 500);
        console.log("done");
      })
      .catch((error) => alert(error));
  };

  console.log(fetchData);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4494/trainers/update/" + id, {
        name: name,
        age: age,
        specialism: special,
      })
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          getData(!fetchData);
          console.log("loading");
        }, 500);
        console.log("done");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <h2>Edit trainer list: </h2>
      {/* <form>
        <h4>Insert values into the following boxes: </h4>
        <input
          type="number"
          min={0}
          placeholder="ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          min={1}
          max={150}
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Specialism"
          value={special}
          onChange={(e) => {
            setSpecial(e.target.value);
          }}
        />
        <br />
        <h4>Select POST (to add a new trainer)</h4>
        <button className="button button1" onClick={handleSubmit}>
          POST
        </button>
        <h3>OR</h3>
        <h4>UPDATE (to update an existing trainer)</h4>
        <button className="button button2" onClick={handleUpdate}>
          UPDATE
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br /> */}

      {/* With bootstrap styling: */}
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              min={0}
              placeholder="ID"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              min={1}
              max={150}
              placeholder="Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Specialism</Form.Label>
            <Form.Control
              type="text"
              placeholder="Specialism"
              value={special}
              onChange={(e) => {
                setSpecial(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Button variant="success" onClick={handleSubmit}>
            POST
          </Button>
          OR
          <Button variant="secondary" onClick={handleUpdate}>
            UPDATE
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddNewTrainer;
