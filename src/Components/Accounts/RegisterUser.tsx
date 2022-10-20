export const RegisterUser = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 position-absolute h-100 bg-warning KwenikLogoBody">
                    <div className="KwenikLogoPosition text-center">
                        <h3>KWENIK</h3>
                        <p>Easy, Fast & Secure way to <b>Transact</b> Cash.</p>
                    </div>
                </div>
                <div className="col-sm-6 offset-sm-6 position-absolute h-100 bg-info">
                    <div className="RegisterBody">
                        <h4>Create Account</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <p>Do you have an account? Log in</p>
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="Town" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control" placeholder="Confirm Passowrd" />
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-warning">Create Account</button>
                            </div>
                            <div className="mt-3 text-center">
                                <p>Log in instead?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}