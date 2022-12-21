import Company from "./sections/Company";
const AboutUs = props => {
    return (
        <div className="container">
            <Company data={props.data.about} founders={props.data.founders}/>
        </div>
    );
}
export default AboutUs;