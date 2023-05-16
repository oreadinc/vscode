export default function Card( { smoothie } ) {
    const { title, method, rating } = smoothie
    return(
        <div>
            <h2>{title}</h2>
            <p>{method}</p>
        </div>
    )
}