import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import AddNewTrainer from "./AddNewTrainer";

const Trainers= () => {

    const [trainers, setTrainers] = useState([]);
    


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setTrainers(res.data))
            .catch(err => console.error(err));
    }, []);
   

    return ( 
        <>
        {
            trainers.map(trainer => <Trainer key={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        
        
        </>
     );
}

export default Trainers;