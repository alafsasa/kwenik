import React from "react";

interface NameProviderProps {
    children: (state: NameProviderState) => React.ReactNode;
}

interface NameProviderState {
    readonly name: string;
}

export default class NameProvider extends React.Component <NameProviderProps, NameProviderState> {
    readonly state: NameProviderState = {name: 'Patekk'};
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="display-4">
                            {this.props.children(this.state)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}