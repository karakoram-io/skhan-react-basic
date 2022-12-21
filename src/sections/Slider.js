const Slider = props => {
    const icons = props.data.map(function(image, index){
        if(index === 0){
            return <li key={index+"icons"} data-target="#slider" data-slide-to={index} className="active"></li>
        } else {
            return <li key={index+"icons"} data-target="#slider" data-slide-to={index}></li>
        }
    });

    const images = props.data.map(function(image, index){
        if(index === 0){
            return <div className="item active" key={index+"-sslider-image"} >
                <img src={image.url} style={{width:'100%'}} alt="Slider Image"/>
            </div>
        } else {
            return <div className="item" key={index+"-sslider-image"} >
                <img src={image.url} style={{width:'100%'}} alt="Slider Image"/>
            </div>
        }
    });
    return (
        <div id="slider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {icons}
            </ol>
            <div className="carousel-inner">
                {images}
            </div>
        </div>
    );
}

export default Slider;