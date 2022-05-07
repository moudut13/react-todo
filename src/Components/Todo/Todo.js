
function Todo(props) {
    const { title,desc} = props.todo;
    const {id} = props;

    const handleClick = (id) =>{
        props.onRemoveItem(id);
    }
    return (
        <div className="card m-auto mb-3 j" style={{width: '25rem',color: 'white', background:'#3a3939', border: 'none', borderRadius: '12px'}}>
            <div className="card-body" style={{background: '#564444',borderRadius: '10px'}}>
                <div className="float-start" style={{width : '320px'}}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <button className="float-right" onClick={()=>{handleClick(id)}}>
                    <i className="fa fa-trash fa-1x"></i>
                </button>
                <div className="float-none"></div>
            </div>
        </div>
    );
}

export default Todo;