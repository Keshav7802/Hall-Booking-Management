// // UserContext.js
// import React, { createContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState('');

//   const logout = () => {
//     setUserName(''); 
//   };

//   return (
//     <UserContext.Provider value={{ userName, setUserName }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;



import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userId,setUserId] = useState('');
  const logout = () => {
    setUserName(''); 
  };

  return (
    <UserContext.Provider value={{ userName, setUserName, logout ,userId,setUserId}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

