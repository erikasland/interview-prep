import { useState } from "react";


const Counter = (props) => {
    const { initial, min, max } = props;
    const [count, setCount] = useState(initial);
    const countLessThanMax = (count < max);
    const countGreaterThanMin = (count > min);


    const handleClick = (e) => {
        const operator = e.target.id;

        if ( operator === "increment" && countLessThanMax ) {
            setCount(count + 1);
        } else if ( operator === "decrement" && countGreaterThanMin) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div>
                <h6>{ count }</h6>
            </div>
            <div>
                <button disabled={ !countLessThanMax } id="increment" onClick={ e => handleClick(e) }>Add</button>
                <button disabled={ !countGreaterThanMin } id="decrement" onClick={ e => handleClick(e) }>Subtract</button>
            </div>
        </div>
    )
}

export default Counter;