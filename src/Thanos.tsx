//import * as React from 'react';

import { useState } from "react";

type Props = {
    count: number;
    label: string;
};

export const Thanos = (props: Props): JSX.Element => {
    const {  count, label } = props;
    //const handleIncrement = () => {
    //    onIncrement();
    //};
    const [scount, setSCount] = useState(count);
    return (
        <div>
            <div className="display-3">THANOS</div>
            <div>
                <p>
                    {label} : {scount}
                </p>
                <div>
                    <button className="btn btn-danger" onClick={()=>setSCount(count)}>Reset</button>
                    <br />
                    <button className="btn btn-success" onClick={()=>setSCount(prevState=>prevState + 1)}>+</button>
                    <br />
                    <button className="btn btn-primary" onClick={()=>setSCount(prevCount=>prevCount - 1)}>-</button>
                </div>
            </div>
        </div>
    );
}

//Thanos.defaultProps = { count: 1 }