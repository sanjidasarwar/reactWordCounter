import { useState } from "react";
import ClearButton from "../component/ClearButton";
import OutputField from "../component/OutputField";
import Textarea from "../component/Textarea";
import { useSelector } from "react-redux";

function WordCounter() {
    const {word, character} = useSelector(state=> state.counter)

    return ( 
        <div className="container">
            <h1>Word Counter</h1>
            <p>Free online character and word counter tool</p>
            <Textarea />
            <div>
                <ClearButton />
            </div>
            <div className="output-field">
                <OutputField type="Word" count={word} />
                <OutputField type="Character" count={character} />
            </div>
        </div>
     );
}

export default WordCounter;