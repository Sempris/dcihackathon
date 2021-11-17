export default function ListItem (props) {
    const title = props.item.title;
    
    return <div>
        <h2>
            {title}
            <button className="btn btn-primary" onClick={(e) => props.handleModal(props.item)}>X</button>
        </h2>
        
    </div>
}