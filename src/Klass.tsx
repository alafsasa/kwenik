import React from 'react';

type Props = {
    label: string;
    initialCount: number;
};

type State = {
    count: number;
}

export default class ClassCounter extends React.Component<Props, State>{
    static defaultProps = {
        initialCount: 0
    }
    readonly state: State = {
        count: this.props.initialCount
    };
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }
    render(){
        const {handleIncrement} = this;
        const {label} = this.props;
        const {count} = this.state;
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div >Klass</div>
                        <div>
                            <span>{label}: {count}</span>
                        </div>
                        <button type="button" className='btn btn-primary' onClick={handleIncrement}>
                            {`Increment`}
                        </button>
                        <br />
                        <button type='button' className='btn btn-warning' onClick={()=>this.setState({count: this.state.count - 1})}> - </button>
                        <br />
                        <button className='btn btn-danger' onClick={()=>this.setState({count: 0})}> Reset </button>
                    </div>
                </div>
            </div>
        );
    }
}