import Slider from "./sections/Slider";
import Company from './sections/Company';
const Home = props => {
    return (
        <>
            <div className="container">
                <Slider data={props.data.home.images}/>
                <Company data={props.data.about} founders={props.data.founders}/>
            </div>
        </>
    );
}

export default Home;