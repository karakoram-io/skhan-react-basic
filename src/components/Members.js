const Members = (props) => {
    return(
        <div className="col-sm-4 col-md-6">
            <div className="media" style={{padding:"10px"}}>
                <div className="media-left">
                    <img src="assets/user.png" className="media-object" style={{width:"60px"}} alt="Founder"/>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Members;