const Tasks =({tasks})=>
{
     return(

            <>
                {tasks.map((task)=>( <h3 key={task.id}>{task.text} {task.day} </h3>))}
            </>
    );
}
export default Tasks

