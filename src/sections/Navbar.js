// import { Link } from "react-router-dom";
import Login from "../components/Login";
const Navbar = () => {
    const appData = {
        isLogin:false
    };

    return (
        <>
            {/* <Link to="/about" className="btn">Click Here</Link> */}
            <nav className="navbar navbar-inverse" style={{marginBottom:"0px", borderRadius:"0px"}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand" >SmartGoal</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="sign-up">Join Us</a></li>
                        {!appData.isLogin ? <li><a data-toggle="modal" data-target="#login">Log In {appData.isLogin}</a></li>:
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" >User &nbsp;
                            <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="/">My Account</a></li>
                                <li><a href="/"> Settings</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
            <Login data={appData}/>
        </>
    );
}

export default Navbar;