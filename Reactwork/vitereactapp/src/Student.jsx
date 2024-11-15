import React from "react";
import "./Student.css";
function Student(props){
return(
    <div className="icard">
        <table>
            <tbody>
                <tr style={{backgroundColor:'cyan',color:'brown'}}>
                    <td colSpan={2}>{props.college}</td>
                </tr> 
                
                <tr><td>Name:</td><td>{props.name}</td></tr>
                <tr><td>Roll no:</td><td>{props.roll}</td></tr>
                <tr><td>Branch:</td><td>{props.branch}</td></tr>
                <tr><td>Section:</td><td>{props.sec}</td></tr>
                                  
            </tbody>
        </table> 
        
        
    </div>
 )
}
export default Student;