import { useDispatch } from "react-redux";
import { clearInputValue } from "../features/counter/counterSlice";

function ClearButton() {
    const dispatch= useDispatch()
    return ( 
        <button className="btn btn-danger" onClick={()=>dispatch(clearInputValue())}>Clear</button>
     );
}

export default ClearButton;