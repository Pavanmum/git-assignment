import { Route, Routes } from "react-router-dom";
import Photogit from "../component/Photogit";

function Routess() {
    return (
        <>
        <Routes>
            <Route path='/' element = {<Photogit/>} />
        </Routes>
        </>
    )
}
export default Routess;