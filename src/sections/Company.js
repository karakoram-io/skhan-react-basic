import Members from "../components/Members";

const About = props => {
    return (
        <>
            <div className="row" style={{paddingLeft:"15px",paddingRight:"15px"}}>
                <div className="jumbotron" style={{marginBottom:"0px"}}>
                    <h1>{props.data.heading}</h1>
                    <p className="text-justify">{props.data.content}</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row" style={{padding:"10px"}}>
                    { props.founders.map(function(founder, index){
                        return <Members key={index+"-ceos"} name={founder.founder} description={founder.about}/>;
                    })}
                </div>
            </div>
        </>
    );
}

export default About;