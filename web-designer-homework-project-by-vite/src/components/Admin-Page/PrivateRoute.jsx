// import React, { useContext } from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import { Context } from '../../context/Context'; 

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isLoggedIn } = useContext(Context); 
// const navigateTo = useNavigate()

//   return (
//     <Route
//       {...rest}
//       element={isLoggedIn ? <Component /> : navigateTo('/login')}
//     />
//   );
// }; 

// export default PrivateRoute;