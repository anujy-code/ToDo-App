import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Todolist = (props) =>{

    

    return(
        <>
        <div className="todo-style">
        <span>
        <DeleteIcon  className="deleteIcon" 
              onClick={()=>{
                  props.onSelect(props.id);
              }}
          />
          </span>
         <li>{props.text}</li>
         </div>
        </>
    )
}
export default Todolist;
