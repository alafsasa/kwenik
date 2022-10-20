interface AppName {
    name: string;
}

function Login({name}: AppName){
    return(
        <div className="container-fluid">
            <div className="row">
                <h4>{name}</h4>
                <p>Easy, Secure Cash Transactions.</p>
                <div className="display-3">KWENIK</div>
            </div>
        </div>
    );
}

export default Login;