import './photoComponent.css'
function PhotoComponent ({image , title}) {

    return (
        <>
        <div className="card">
        <img src={image} className="image" />
        <h1 id='title'>{title}</h1>
        </div>
        </>
    
    )
}
export default PhotoComponent;