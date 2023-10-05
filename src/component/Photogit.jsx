import { useEffect, useState } from "react";
import PhotoComponent from "./photoComponent";
import axios from 'axios';
import './Photogit.css'
import useDebounce from "../customHook/useDebounce";


function Photogit({}) {
    const [image, setImage] = useState([]);
    const [serachTerm, setSearchterm] = useState('');
    const debouncedCallback = useDebounce( useDebounce((e) => setSearchterm(e.target.value)));

    
    async function fetchImage  ()  {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${serachTerm||"pavan"}`)
            const photoList = await response.data.items;
          
            const res = photoList.map((p) => {
                return {
                    login: p.login,
                    image: p.avatar_url,
                    id : p.id
                }
            })
            setImage(res);
        } catch (error) {
            console.log(error.message)
        }
       
    }
    

    useEffect(() =>{
        fetchImage();
    }
    ,[serachTerm])


    return (
        <>
        <div className="text-box">
        <input id='input-box' type='text' placeholder="Enter the Name....."
      onChange={debouncedCallback}/>
        </div>
        <div className="image-wrapper">

            {
        
        image.map((photos) => (
        <PhotoComponent image={photos.image} title={photos.login} key={photos.id}/>
        )
        )}
        </div>
        </>
      );
}
export default Photogit;