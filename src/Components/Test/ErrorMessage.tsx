import React from "react";

export const ErrorMessage: React.FC <{onReset: () => void}> = ({onReset}) => {
    return(
        <div>
            <h2>{`Sorry there was an unexpected error!`}</h2>
            {`To continue: `}
            <a href="/" onClick={() => {onReset()}}>
                {`go to homepage`}
            </a>
        </div>
    )
}