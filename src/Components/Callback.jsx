/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";

function Callback() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const ageClick = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryClick = useCallback(() => {
    setSalary(salary + 50000);
  }, [salary]);

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <h2>AGE : {age}</h2>
      <h2>SALARY : {salary}</h2>

      <Age ageClick={ageClick} />
      <Salary salaryClick={salaryClick} />
    </div>
  );
}

const Age = React.memo(({ ageClick }) => {
  console.log("Age Re-Rendered");
  return <button style={{padding:'10px'}}  onClick={ageClick}>Age</button>;
});

const Salary = React.memo(({ salaryClick }) => {
  console.log("Salary Re-Rendered");
  return <button style={{padding:'10px'}}  onClick={salaryClick}>Salary</button>;
});

export default Callback;
