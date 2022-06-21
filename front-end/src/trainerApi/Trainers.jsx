import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import AddNewTrainer from "./AddNewTrainer";
import DeleteTrainer from "./DeleteTrainer";
import ReadById from "./ReadById";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./Nav";

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
        {/* <h2>List of trainers: </h2>
        {
            trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        <br/> */}
        {/* <h2>Add new trainer: </h2>
        <AddNewTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Remove an existing trainer: </h2>
        <DeleteTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Read trainer by ID: </h2>
        <ReadById getData={setFetchData} fetchData={fetchData}/> */}
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route exact path="/" element={trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)}/>
            <Route path="/EditList" element={<AddNewTrainer getData={setFetchData} fetchData={fetchData}/>}/>
            <Route path="/DeleteTrainer" element={<DeleteTrainer getData={setFetchData} fetchData={fetchData}/>}/>
            <Route path="/FindTriner" element={<ReadById getData={setFetchData} fetchData={fetchData}/>}/>
        </Routes>
        </BrowserRouter>

        </>
     );
}

export default Trainers;