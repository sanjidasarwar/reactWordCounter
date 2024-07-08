import ClearButton from "../component/ClearButton";
import OutputField from "../component/OutputField";
import Textarea from "../component/Textarea";

function WordCounter() {
    return ( 
        <div className="container">
            <h1>Word Counter</h1>
            <p>Free online character and word counter tool</p>
            <Textarea />
            <div>
                <ClearButton />
            </div>
            <div>
                <OutputField type="Word" />
                <OutputField type="Character" />
            </div>
        </div>
     );
}

export default WordCounter;