import {useState} from 'react';

const Login = props => {

    const [data,setData] = useState({
        phone:"",
        password:""
    });

    const loginHandler = e => {
        e.preventDefault();
        fetch('http://localhost:3000/dummy-apis/login.json').then(results => results.json()).then( response => {
            if(data.phone === response.username && data.password === response.password){
                alert("Login Successfull");
            } else {
                alert("Invalid Credentials");
            }
        });
    }

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    return (
        <div id="login" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form id="login-form" onSubmit={loginHandler}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Login</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <input onChange={changeHandler} name="phone" type="text" placeholder="Phone" className="form-control"/>
                                    </div>
                                    <br/><br/>
                                    <div className="col-sm-12">
                                        <input onChange={changeHandler} name="password" type="password" placeholder="Password" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;