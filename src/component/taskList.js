import './taskList.css';
export default function({
    toDoList, onRemove
}) {
    return(
        <div className='listWrapper'>
            <h2 className='titleAdd'>Existing Task</h2>
            <div className='wrapper'>
                {
                    toDoList.map((index)=>{
                        return (
                            <div key='index.id' className='dataWraper'>
                                <strong>{index.name}</strong>
                                <span className='datePicker'>{index.date}</span>
                                <strong>{index.assigned}</strong>
                                <span onClick={onRemove(index.id)} className='rmvBtn'>X</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}