import { useDispatch } from "react-redux";
import { getInputValue } from "../features/counter/counterSlice";

function Textarea() {
  const dispatch= useDispatch()
  const handleChange =(e)=>{
        dispatch(getInputValue(e.target.value))
  }
    return ( 
        <>
        <textarea name="message" id="message" cols="30" rows="10" onChange={(e)=>handleChange(e)}></textarea>
        </>
     );
}

export default Textarea;