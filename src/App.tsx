import { useEffect, useState } from "react";
import { InputField } from "./Input";

function App() {
  const [num, setNumber] = useState<any>();
  const [showOtp, setShowOpt] = useState<boolean>(false);
  const handleNumber = (e: any) => {
    let value = e.target.value;
    value = value.substring(0, 10);
    setNumber(value);
  };
  const onEnter = (e:any) => {
    if(e.key = 'Enter'){
      setShowOpt(true)
    }
  }
  let empDetails = [
    {
      id:1,
      eName : 'subh',
      salary: 10000,
      experience: 2
    },
    {
      id:2,
      eName: 'ram',
      salary: 20000,
      experience: 4
    },
    {
      id:3,
      eName: 'ram',
      salary: 20000,
      experience: 6
    },
    {
      id:4,
      eName: 'ram',
      salary: 20000,
      experience: 8
    }
  ]
  const calculator = () => {
    for(let x =0;x<empDetails.length;x++){
      console.log(x, empDetails[x].experience > 3 && empDetails[x].experience <= 5)
      if(empDetails[x].experience > 3 && empDetails[x].experience <= 5){
        empDetails[x].salary += (empDetails[x].salary)*(0.2) 
      }else if(empDetails[x].experience>5 && empDetails[x].experience<8){
        empDetails[x].salary += (empDetails[x].salary)*(0.3) 
      }
    }
    console.log(empDetails)
  }
  useEffect(()=>{
    calculator()
  },[])
  return (
    <>
      {/* <input
        type="number"
        max="9999999999"
        onChange={(e) => handleNumber(e)}
        value={num}
        onKeyDown={(e)=>onEnter(e)}
      ></input> */}
      {/* <InputField fields={4}/> */}
    </>
  );
}

export default App;
