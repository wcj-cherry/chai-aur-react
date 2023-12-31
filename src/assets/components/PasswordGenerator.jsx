import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+{}[]?<>|";

    for (let i = 1; i < length; i++) {
      let pass = Math.floor(Math.random() * str.length + 1);
      passwd += str.charAt(pass);
    }
    setPassword(passwd);
  }, [length, number, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
    toast.success("Password Copied to Clipboard", {
      position: "bottom-center",
    });
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto py-44 w-full px-6">
      <h1 className="text-blue-600 m-4 text-center text-4xl py-6">
        Password Generator
      </h1>
      <div className="flex justify-around shadow rounded-lg overflow-hidden px-4 mb-4 bg-purple-200">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="py-1 px-3 outline-none w-full"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 shrink-0 px-3 outline-none text-white rounded-lg py-0.5"
          onClick={copyClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between text-white">
        <div className="flex items-center">
          <input
            type="range"
            min={8}
            max={99}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="px-1">Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="number" className="px-1">
            Number
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="chrInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="character" className="px-1">
            Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
