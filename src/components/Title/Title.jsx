import './Title.css';

const Title = ({subTitle, offer}) => {
    return(
        <div className="title">
            <p>{subTitle}</p>
            <h2>{offer}</h2>
        </div>
    )
}

export default Title;