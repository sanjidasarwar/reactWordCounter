import { useDispatch } from "react-redux";
import { clearInputValue } from "../features/counter/counterSlice";

function ClearButton() {
    const dispatch= useDispatch()
    return ( 
        <button onClick={()=>dispatch(clearInputValue())}>Clear</button>
     );
}

export default ClearButton;