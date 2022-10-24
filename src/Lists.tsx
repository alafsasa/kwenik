import React from "react";

export interface GeneralListProps<T>{
    items: T[];
    itemRenderer: (item: T) => JSX.Element;
}

export default class GeneralList<T> extends React.Component<GeneralListProps<T>, {}>{
    render(): React.ReactNode {
        //const {items} = this.props;
        //items.map((x)=>console.log(x))
        const {items, itemRenderer} = this.props;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="display-3">List</div>
                        <div>
                            {items.map(itemRenderer)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}