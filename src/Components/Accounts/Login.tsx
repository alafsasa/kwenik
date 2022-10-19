import { useState } from "react";

interface UserEmail {
    email: string;
}

interface UserPassword {
    password: string;
}

export const Login = () => {
    const [userEmail, setUserEmail] = useState<UserEmail>();
    const [userPassword, setUserPassword] = useState<UserPassword>();

    const handleEmailChange = (e: any) => {
        setUserEmail({email: e.target.value});
    }
    const handlePasswordChange = (e: any) => {
        setUserPassword({password: e.target.value});
    }
    const handleSubmit = (e: any) => {
        //some awesome code
        e.preventDefault();
        console.log(userEmail);
        console.log(userPassword);
        //clear input fields
    }
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
                            <form onSubmit={handleSubmit}>
                                <div className="mt-3 mb-3">
                                    <p>
                                        Don't have an account? <span><b>Create an account.</b></span>
                                    </p>
                                    <p>
                                        It will take less than a minute.
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Email" onChange={handleEmailChange} />
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Password" onChange={handlePasswordChange} />
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