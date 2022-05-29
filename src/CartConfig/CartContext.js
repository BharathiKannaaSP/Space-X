// import React, { createContext, useContext, useReducer } from 'react'
// import { cartReducer } from './Reducers';
// const Cart=createContext();

// const menus=[
//     {
//       id:1,
//       name:'Chocalate',
//       price:120,
//       img:'https://images.pexels.com/photos/5925735/pexels-photo-5925735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category:'Cake with cream',
//       description:'Chocolate Cake With Cherry on White Ceramic Plate'
//     },
//     {
//       id:2,
//       name:'Chocalate Mousse',
//       price:200,
//       img:'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category:'Ice Creams',
//       description:'Chocolate mousse is a staple among chocolate desserts. It is very popular for all ages. Its texture is easy to recognize'
//     },
//     {
//       id:3,
//       name:'Black Forest',
//       price:500,
//       img:'https://images.pexels.com/photos/12084254/pexels-photo-12084254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category:'Cake',
//       description:'Black Forest Ice Cream is a delicious ice cream made with black forest'
  
//     },
//     {
//       id:4,
//       name:'Orange Drink',
//       price:135,
//       img:'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category:'Drinks',
//       description:'Orange juice is a fruit juice obtained by squeezing, pressing or otherwise crushing the interior of an orange.'
  
//     },
//     {
//       id:5,
//       name:'Lime & Kiwi',
//       price:165,
//       img:'https://images.pexels.com/photos/3038241/pexels-photo-3038241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category:'Drinks',
//       description:'A Glass Filled With Refreshing Juice Drink With Lime And Kiwi'
  
//     },
//     {
//       id:6,
//       name:'Falooda ',
//       price:120,
//       img:'https://images.pexels.com/photos/1028420/pexels-photo-1028420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       category:'Drinks',
//       description:'A falooda is a Mughlai Indian version of a cold dessert made with noodles. It has origins in the Persian dish faloodeh.'
  
      
//     },
//   ]
//   console.log(menus)


// const CartContext = ({children}) => {
//     const [state,dispatch]=useReducer(cartReducer,{
//         menus:menus,
//         cart:[],
//     })
//   return (
//     <Cart.Provider value={{state,dispatch}}>
//         {children}
//     </Cart.Provider>
//     )
// }

// export default CartContext


// export const CartState=()=>{
//     return useContext(Cart);
// }