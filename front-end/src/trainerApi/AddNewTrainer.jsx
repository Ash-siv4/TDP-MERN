import axios from "axios";
import { useState } from "react";


const AddNewTrainer =({getData, fetchData})=>{

    //3 states
        //name
        //age
        // specialism
        const [name, setName] = useState();
        const [age, setAge] = useState();
        const [special, setSpecial] = useState();
        //and id now:
        const [id, setId] = useState();

        const handleSubmit= (e)=>{
            e.preventDefault();

            axios.post("http://localhost:4494/trainers/create",{
                "_id": id,
                "name": name,
                "age": age,
                "specialism": special
            })
            .then((res)=>{
                console.log(res);

                setTimeout(()=>{

                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((error)=>alert(error))
        }

        console.log(fetchData)

        
        return (
          <form >
            <h4>Insert values into the following boxes: </h4>
            <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <input type="number" min={1} max={150} placeholder="Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Specialism" value={special}onChange={(e)=>{setSpecial(e.target.value)}} />
            <br/>
            <h4>Select POST (to add a new trainer)</h4>
            <button className="button button1" onClick={handleSubmit} >POST</button>
          </form>
        );
            
}

export default AddNewTrainer;