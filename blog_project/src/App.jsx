import { useState, useEffect } from "react";
import { Footer, Header } from "./components";
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout(userData))
        }
      })
      .finally(() => { setLoading(false) })
    console.log("Use Effect Running")
  }, [])


  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
          Todo:   {/* <Outlet/> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App;
