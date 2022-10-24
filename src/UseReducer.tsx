import { useReducer } from "react";

interface State {
    count: number;
}

type Action = {type: 'reset'} | {type: 'increment'} | {type: 'decrement'};


function reducer(state: State, action: Action): State {
    switch(action.type){
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return {count: state.count - 1};
        case 'reset': return {count : 0};
        default: throw new Error();
    }
}

interface CounterProps {
    initialCount: number;
}

function Count({initialCount}: CounterProps){
    const [state, dispatch] = useReducer(reducer, {count: initialCount});
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    Count: {state.count}
                    <br />
                    <button className="btn btn-danger" onClick={()=>dispatch({type: 'reset'})}>Reset</button>
                    <br />
                    <button className="btn btn-primary" onClick={()=>dispatch({type: 'increment'})}>+</button>
                    <br />
                    <button className="btn btn-warning" onClick={()=>dispatch({type: 'decrement'})}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Count;