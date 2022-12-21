const FooterLinks = (props) => {
    return (
        <div className="col-sm-12 col-md-4 text-center">
            <a href={props.url}><p className="" style={{color:"#DCDCDC"}}>{props.link}</p></a>
        </div>
    );
}

export default FooterLinks;