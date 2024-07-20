import { useState, useCallback, useEffect, useRef } from 'react';

function App() {

  const [length, setLength] = useState(8);

  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    if (lowercaseAllowed) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercaseAllowed){
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 

    if (numberAllowed){
      str += "0123456789";
    } 

    if (charAllowed){
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, lowercaseAllowed, uppercaseAllowed, numberAllowed, charAllowed]);


  const copyPassword = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);

  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, lowercaseAllowed, uppercaseAllowed, numberAllowed, charAllowed, passwordGenerator]);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-white">

      <h1 className=" font-bold text-center mb-6 font-mono text-5xl border-2 p-6 bg-white rounded-md">Password Generator</h1>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-8">

        <div className="flex mb-4">

          <input type="text" value={password} ref={passwordRef} readOnly placeholder="Password" 
          className="w-full p-2 border border-gray-300 rounded-l-lg" />

          <button onClick={copyPassword} className="p-2 bg-blue-600 text-white rounded-r-lg"> Copy </button>
        </div>
        
        <div className="flex items-center mb-4 mt-10">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="flex-grow mr-2"
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="p-2 bg-gray-200 rounded-lg">{length}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">

          <label className="flex items-center  border-2 p-2">
            <input
              type="checkbox"
              checked={lowercaseAllowed}
              onChange={() => setLowercaseAllowed(prev => !prev)}
              className="mr-2"
            />
            a-z
          </label>

          <label className="flex items-center  border-2 p-2">
            <input
              type="checkbox"
              checked={uppercaseAllowed}
              onChange={() => setUppercaseAllowed(prev => !prev)}
              className="mr-2"
            />
            A-Z
          </label>

          <label className="flex items-center  border-2 p-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="mr-2"
            />
            0-9
          </label>

          <label className="flex items-center  border-2 p-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="mr-2"
            />
            @$*%!
          </label>

        </div>
        
        <button onClick={passwordGenerator} className="w-full p-2 bg-blue-600 text-white rounded-lg mt-10">
          Generate
        </button>

      </div>
    </div>
  );
}

export default App;
