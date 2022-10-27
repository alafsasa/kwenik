type Props = {
    label: string;
    count: number;
    onIncrement: () => void;
};

export const FCCounter: React.FC <Props> = props => {
    const { label, count, onIncrement } = props;
    const handleIncrement = () => {
        onIncrement();
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    {label}: {count}
                    <div>
                        <button type="button" onClick={handleIncrement} >{`Increment`}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}