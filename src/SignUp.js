const SignUp = props => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Join Us!</h1>
            </div>
            <form id="signup-form">
                <div className="row" style={{padding:"20px"}}>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-6">
                            <label>Name</label>
                            <input type="text" placeholder="Name" className="form-control"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label>Email</label>
                            <input type="text" placeholder="Email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-6">
                            <label>Phone</label>
                            <input type="text" placeholder="Phone" className="form-control"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label>Pasword</label>
                            <input type="password" placeholder="Pasword" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-12 text-center">
                            <br/>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;