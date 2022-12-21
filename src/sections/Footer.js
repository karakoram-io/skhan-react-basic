import FooterLinks from "../components/FooterLinks";
const Footer = props => {
    var footerLinks = ['About Us', 'Register', 'Login','My Account','Settings','Logout'];
    return (
        <>
            <div className="container-fluid" style={{background:"#5A5554",padding:"50px"}}>
                { props.data.map(function(link, index){
                    return <FooterLinks key={index} url={link.url} link={link.text}/>;
                })}
            </div>
            <div className="container-fluid text-center" style={{background:"#5A5554",padding:"10px"}}>
                <p style={{color:"#DCDCDC"}}>&copy; Copyright and some footer text</p>
            </div>
        </>
    );
}

export default Footer;