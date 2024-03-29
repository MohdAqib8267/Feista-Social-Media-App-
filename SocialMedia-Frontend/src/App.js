import { useSelector } from "react-redux";
import { Route, Routes,Navigate } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
function App() {
 
  const user = useSelector((state)=>state.user.currentUser);
  // console.log(user);
  return ( 
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}  
        {/* <Profile/> */}
        <Routes>
          <Route path="/" element={user?<Navigate to="Home"/>:<Navigate to="auth" />} />
          <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
         <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route path="profile/:id" element={user? <Profile/> : <Navigate to ="../auth" />} ></Route>
        <Route path="/chat" element={user? <Chat/> : <Navigate to="../auth" />}></Route>
        </Routes>
        
        {/* <Auth/> */}
    </div>
  );
}

export default App;
