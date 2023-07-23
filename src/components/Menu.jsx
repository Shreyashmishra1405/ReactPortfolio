import React from "react";
import "./Menu.scss";
export default function Menu({menu,setMenu}) 
{
  return (<>
    <div className={"menu " + (menu && "active")}>
       <ul>
        <li>
            <a href="#intro" onClick={()=>setMenu(false)}>Home</a>
        </li>
        {/* <li>
            <a href="#portfolio" onClick={()=>setMenu(false)}>Portfolio</a>
        </li> */}
        <li>
            <a href="#works" onClick={()=>setMenu(false)}>Works</a>
        </li>
        <li>
            <a href="#contact"onClick={()=>setMenu(false)} >Contact</a>
        </li>
       </ul>
    </div>
    </>
  );
 
}
