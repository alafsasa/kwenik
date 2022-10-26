import React from "react";

export interface MouseProviderProps {
    render: (state: MouseProviderState) => React.ReactNode;
}

interface MouseProviderState {
    readonly x: number;
    readonly y: number;
}

export default class MouseProvider extends React.Component <MouseProviderProps, MouseProviderState> {
    readonly state: MouseProviderState = {
        x: 0,
        y: 0
    };
    handleMouseMove = (event: React.MouseEvent <HTMLDivElement>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    };
    render(): React.ReactNode {
        //console.log(this.state.x);
        //console.log(this.state.y);
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="display-4">Track Mouse Coordinates in a Div</div>
                        <div className="h-50 w-50 bg-primary position-absolute" onMouseMove={this.handleMouseMove}>
                            <div className="p-3 text-white">
                                <p>X-Dir: <span style={{color: 'red'}}>{this.state.x}</span></p>
                                <p>Y-Dir: <span style={{color: 'red'}}>{this.state.y}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}