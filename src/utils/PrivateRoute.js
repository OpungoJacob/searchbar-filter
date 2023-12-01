import {Outlet, Navigate} from 'react-router-dom'


function PrivateRoutes() {
    // let auth = {'token':false}
    // auth.token ? <Outlet /> : <Navigate to="/Login"/>
    // user.token ? <Outlet /> : <Navigate to="/Login"/>
    //const user = localStorage.getItem("token")
    const token = localStorage.getItem("token");
  return (
    token ? <Outlet /> : <Navigate to="/Login"/>
  )
}

export default PrivateRoutes