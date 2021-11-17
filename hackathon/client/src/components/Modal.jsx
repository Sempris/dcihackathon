import './Modal.scss'
export default function ListItem (props) {
    const item = props.item;
    return <div className="modal">
        <div>
        <h2>
            {item.title}
        </h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={(e)=> props.closeModal()}>X</button>
        </div>
    </div>
}