import axios from 'axios'
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const baseUrl = "http://localhost:3000/results"

const Movies = () => {
    const [data,setData] = useState([])

    useEffect(() => {
       axios.get(baseUrl).then(response => {
            setData(response.data)
        }
            
        )
      }, []);




    const handlingDelete = (id) => {
        setData(oldData => {
            return oldData.filter(one => one.id !== id)
        })      
    }


    

    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
            <Movie movies={data} deleting={handlingDelete}/>
        </div>
    )  


}

export default Movies
