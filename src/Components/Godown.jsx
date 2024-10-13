import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveProductId } from "../AppStore/authSlice";
import { NavLink } from 'react-router-dom';

function Item({item}) {
  const dispatch = useDispatch()
  return (
    <div   draggable={true} className="pl-6 my-1  text-[1rem] bg-violet-50 hover:bg-violet-100 py-1 rounded-lg">
       <NavLink to={`/${item._id}`}>
       <i className="ri-file-3-line"></i> {item.name}
       </NavLink>
    </div>
  );
}


function Godown({ depth, godownData }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="pl-4 text-[1.2rem]   border-2 border-violet-100 bottom-1 rounded-lg  px-2 py-1">
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className="cursor-pointer flex justify-between items-center"
      >
        <div className="flex gap-3 items-center">
          <i className="ri-home-6-fill"></i>{" "}
          <span>{godownData.name}</span>
        </div>
        <span>
          {!isActive ? (
            <i className="ri-arrow-down-s-line"></i>
          ) : (
            <i className="ri-arrow-up-s-line"></i>
          )}
        </span>
      </div>

    
      <div className={`${isActive ? "block" : "hidden"} pl-4 `}>
        
        {godownData.items &&
          godownData?.items.map((item, index) => (
            <Item key={index} item={item} />
          ))}

       
        {godownData.subGodowns &&
          godownData.subGodowns.map((subGodown, index) => (
            <Godown key={index} depth={depth + 1} godownData={subGodown} />
          ))}
      </div>
    </div>
  );
}

export default Godown;
