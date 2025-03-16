import React, {useState} from 'react';

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    tel:""  
  })
  

  const onChange = (e) => {
      const value = e.target.value;
      const id = e.target.id;
    
    // inputs[id] = value;
      setInputs({
        // ...inputs,
        name: "",
        email:"",
        tel:"",
          [id]: value
      })
  }
  
  
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      <div>
        <label>전화번호</label>
      </div>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
    </div>
  );
};

export default Input2;