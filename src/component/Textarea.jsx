import { useDispatch, useSelector } from "react-redux";
import { getInputValue } from "../features/counter/counterSlice";

function Textarea() {
  const inputValue = useSelector(state=>state.counter.inputValue)
  const dispatch= useDispatch()
  const handleChange =(e)=>{
        dispatch(getInputValue(e.target.value))
  }
    return ( 
        <>
        <textarea className="form-control" name="message" id="message" cols="30" rows="10" value={inputValue} onChange={(e)=>handleChange(e)}></textarea>
        </>
     );
}

export default Textarea;