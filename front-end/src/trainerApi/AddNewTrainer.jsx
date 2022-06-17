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

        const handleSubmit= (e)=>{
            e.preventDefault();
    
            axios.post("http://localhost:4494/trainers/create",{
                "name": name,
                "age": age,
                "specialism": special
            })
            .then((res)=>{
                console.log(res);

                setTimeout(()=>{

                    getData(!fetchData)
                    console.log("loading")
                }, 2000)
                console.log("done")
            })
            .catch((error)=>alert(error))
        }

        console.log(fetchData)


        
        return (
          <form >
            <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="number" min={1} max={150} placeholder="Age"value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            <input type="text" placeholder="Specialism" value={special}onChange={(e)=>{setSpecial(e.target.value)}} />
      
            <button  onClick={handleSubmit} >Post</button>
          </form>
        );

}

export default AddNewTrainer;