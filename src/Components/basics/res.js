import React , {useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ... new Set(
  Menu.map((curElem) => {
    return curElem.cat;
  })),
    "All",
];
console.log(uniqueList);


const Res = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);
  const [menuList, setMenuList] =useState(uniqueList);
  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    const updatedlist = Menu.filter((curElem) => {
      return curElem.cat === category;  

    } )
    setMenuData(updatedlist);
  };
  return (
    <div>
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuData = {menuData} />
      
    </div>
  )
}

export default Res;








































// import React, { useState } from 'react'
// import "./style.css";
// import Menu from "./menuApi"

// const res = () => {
//   const myStyle = {color : "metallic black"};
//   const [menuData, setMenuData]= useState(Menu);
  

//   return (
//     <>
//       {/* <p>Hello resturant</p> */}
//       <div className='card-container' >
//       <div className='card'>
//         <div className='card-body'>
//           <span className='card-number card-circle subtle'>1</span>
//           <span className='card-author subtle' style ={myStyle} > Breakfast </span>
//           <h2 className='card-title'> Maggi </h2>
//           <span className=' card-description subtle'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consequatur quis cum, sit natus tempora harum deleniti a? Quia tempora nostrum cupiditate, harum dolores aut rerum voluptate nesciunt nisi voluptatum.
//           </span>
//           <div className='card-read'>Read</div>
//         </div>  
//               <img src = "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg" alt = 'image' className='card-media' />
//       </div>
//       </div>
//     </>
//   )
// }

// export default res
