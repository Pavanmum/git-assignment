import { useEffect, useState } from "react";
import PhotoComponent from "./photoComponent";
import axios from 'axios';

function Photogit() {
    const [isLoading, setLoading] = useState(true)
    const [image, setImage] = useState([]);

    async function fetchImage() {
        const response = await axios.get("https://api.github.com/users")
        const photoList = response.data;
        const res = photoList.map((p) => {
            return {
                login: p.login,
                image: p.avatar_url,
                id : p.id
            }
        })
        setImage(res);
        console.log(res)
        // console.log(photoList)
        setLoading(false);
    }
    
    useEffect(() =>{
        fetchImage();
    }
    ,[])

    return (
        <div>

            {(isLoading) ? 'Loading...' :
        
        image.map((photos) => (
        <PhotoComponent image={photos.image} title={photos.login} key={photos.id}/>
        )
        )}
         
          
        </div>
      );
}
export default Photogit;