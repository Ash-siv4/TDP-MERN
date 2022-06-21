import axios from "axios";
import { useState } from "react";
import Trainer from "../Trainer";


const ReadById= ({getData, fetchData}) => {

    const [trainer, setTrainer] = useState([]);
    const [id, setId] = useState();


    const handleReadByID= (e)=>{
        e.preventDefault();        
        
        axios.get("http://localhost:4494/trainers/read/"+id)
        .then((res)=>{
            setTrainer(res.data)
            console.log(res);

            setTimeout(()=>{

                getData(!fetchData)
                console.log("loading")
            }, 500)
            console.log("done")
        })
        .catch((error)=>alert(error))
    }

    return ( 
        <>
        <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
        <br/>
        <button className="button button4" onClick={handleReadByID} >READ</button>
        {
            trainer.map= (<Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        
        </>
     );
}

export default ReadById;