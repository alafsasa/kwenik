import React from "react";

export interface MouseProviderProps {
    render : (state: MouseProviderState) => React.ReactNode;
}

interface MouseProviderState {
    readonly x: number;
    readonly y: number;
}

export class MouseProvider extends React.Component <MouseProviderProps, MouseProviderState> {
    readonly state: MouseProviderState = {x: 0, y: 0}
    handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render(): React.ReactNode {
        return(
            <div style={{height: '700px', backgroundColor: 'lightblue'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
                <div className="display-3">
                    <div>Coordinates</div>
                    <div>X: {this.state.x}</div>
                    <div>X: {this.state.y}</div>
                </div>
            </div>
        )
    }
}