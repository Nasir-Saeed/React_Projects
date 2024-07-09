import { useState } from "react";
import { Footer, Header } from "./components";
import { useDispatch } from 'react-redux'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
