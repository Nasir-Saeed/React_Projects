
import { useCallback, useState, useEffect, useRef } from "react"
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  let passRef = useRef(null)
  let copyPasswordtoClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black ">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3" placeholder="Password" value={password} readOnly ref={passRef} />
          <button className='outline-none text-white px-3 py-0.5 shrink-0 bg-sky-500 hover:bg-sky-700' onClick={copyPasswordtoClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={25} className='cursor-pointer' value={length} onChange={(e) => { setLength(e.target.value) }}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="numberInput" className="text-white">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput"
              onChange={() => setCharacterAllowed((prev) => !prev)} />
            <label htmlFor="characterInput" className="text-white" >Characters: {characterAllowed}</label>
          </div>
        </div>
      </div>

    </>
  );
}
//     

export default App;
