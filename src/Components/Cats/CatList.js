import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map(cat => {return(<li>{cat}</li>)})}
   </div>
 )
}
 
export default CatList;
