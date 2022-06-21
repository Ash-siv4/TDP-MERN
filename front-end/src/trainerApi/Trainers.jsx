import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import AddNewTrainer from "./AddNewTrainer";
import DeleteTrainer from "./DeleteTrainer";
import ReadById from "./ReadById";

const Trainers= () => {

    const [trainers, setTrainers] = useState([]);
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setTrainers(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);

    return ( 
        <>
        <h2>List of trainers: </h2>
        {
            trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        <br/>
        <h2>Add new trainer: </h2>
        <AddNewTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Remove an existing trainer: </h2>
        <DeleteTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Read trainer by ID: </h2>
        <ReadById getData={setFetchData} fetchData={fetchData}/>
        </>
     );
}

export default Trainers;