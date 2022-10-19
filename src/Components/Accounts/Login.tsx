export const Login = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 position-absolute h-100 bg-warning">
                    <div>Logo</div>
                </div>
                <div className="col-sm-6 offset-sm-6 position-absolute h-100 bg-secondary">
                    <div className="Login">
                        <h4>Log In</h4>
                        <div>
                            <form>
                                <div className="mt-3 mb-3">
                                    <p>
                                        Don't have an account? <span><b>Create an account.</b></span>
                                    </p>
                                    <p>
                                        It will take less than a minute.
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                            <div className="text-center">
                                Forgot your password?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}