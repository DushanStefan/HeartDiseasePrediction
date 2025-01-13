// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [data, setData] = useState({
//     age: 50,
//     sex: 0,
//     cp: 0,
//     trestbps: 120,
//     chol: 200,
//     restecg: 0,
//     thalach: 120,
//     exang: 0,
//     oldpeak: 2.5,
//     slope: 0,
//     ca: 0,
//     thal: 0,
//   });

//   const [result, setResult] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", data);
//       setResult(response.data.prediction);
//     } catch (error) {
//       console.error("There was an error making the request:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Heart Disease Prediction</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={data.age}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Sex:
//           <select name="sex" value={data.sex} onChange={handleChange}>
//             <option value={0}>Female</option>
//             <option value={1}>Male</option>
//           </select>
//         </label>
//         <label>
//           Chest Pain Type:
//           <select name="cp" value={data.cp} onChange={handleChange}>
//             <option value={0}>Type 0</option>
//             <option value={1}>Type 1</option>
//             <option value={2}>Type 2</option>
//             <option value={3}>Type 3</option>
//           </select>
//         </label>
//         <label>
//           Resting Blood Pressure:
//           <input
//             type="number"
//             name="trestbps"
//             value={data.trestbps}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Serum Cholesterol:
//           <input
//             type="number"
//             name="chol"
//             value={data.chol}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Resting ECG Results:
//           <select name="restecg" value={data.restecg} onChange={handleChange}>
//             <option value={0}>Normal</option>
//             <option value={1}>Having ST-T wave abnormality</option>
//             <option value={2}>
//               Showing probable or definite left ventricular hypertrophy
//             </option>
//           </select>
//         </label>
//         <label>
//           Maximum Heart Rate Achieved:
//           <input
//             type="number"
//             name="thalach"
//             value={data.thalach}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Exercise Induced Angina:
//           <select name="exang" value={data.exang} onChange={handleChange}>
//             <option value={0}>No</option>
//             <option value={1}>Yes</option>
//           </select>
//         </label>
//         <label>
//           ST Depression:
//           <input
//             type="number"
//             name="oldpeak"
//             step="0.1"
//             value={data.oldpeak}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Slope of the Peak Exercise ST Segment:
//           <select name="slope" value={data.slope} onChange={handleChange}>
//             <option value={0}>Upsloping</option>
//             <option value={1}>Flat</option>
//             <option value={2}>Downsloping</option>
//           </select>
//         </label>
//         <label>
//           Number of Major Vessels Colored by Fluoroscopy:
//           <select name="ca" value={data.ca} onChange={handleChange}>
//             <option value={0}>0</option>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//           </select>
//         </label>
//         <label>
//           Thalassemia:
//           <select name="thal" value={data.thal} onChange={handleChange}>
//             <option value={0}>Normal</option>
//             <option value={1}>Fixed Defect</option>
//             <option value={2}>Reversible Defect</option>
//           </select>
//         </label>
//         <button type="submit">Predict</button>
//       </form>
//       {result && <h2>Result: {result}</h2>}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({
    age: 50,
    sex: 0,
    cp: 0,
    trestbps: 120,
    chol: 200,
    restecg: 0,
    thalach: 120,
    exang: 0,
    oldpeak: 2.5,
    slope: 0,
    ca: 0,
    thal: 0,
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/predict",
          data
        );
        setResult(response.data.prediction);
      } catch (error) {
        console.error("There was an error making the request:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heart Disease Prediction</h1>
      </header>
      <form className="form">
        <label className="form-group label">
          Age:
          <input
            className="form-group input"
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Sex:
          <select name="sex" value={data.sex} onChange={handleChange}>
            <option value={0}>Female</option>
            <option value={1}>Male</option>
          </select>
        </label>
        <label>
          Chest Pain Type:
          <select name="cp" value={data.cp} onChange={handleChange}>
            <option value={0}>Type 0</option>
            <option value={1}>Type 1</option>
            <option value={2}>Type 2</option>
            <option value={3}>Type 3</option>
          </select>
        </label>
        <label>
          Resting Blood Pressure:
          <input
            type="number"
            name="trestbps"
            value={data.trestbps}
            onChange={handleChange}
          />
        </label>
        <label>
          Serum Cholesterol:
          <input
            type="number"
            name="chol"
            value={data.chol}
            onChange={handleChange}
          />
        </label>
        <label>
          Resting ECG Results:
          <select name="restecg" value={data.restecg} onChange={handleChange}>
            <option value={0}>Normal</option>
            <option value={1}>Having ST-T wave abnormality</option>
            <option value={2}>
              Showing probable or definite left ventricular hypertrophy
            </option>
          </select>
        </label>
        <label>
          Maximum Heart Rate Achieved:
          <input
            type="number"
            name="thalach"
            value={data.thalach}
            onChange={handleChange}
          />
        </label>
        <label>
          Exercise Induced Angina:
          <select name="exang" value={data.exang} onChange={handleChange}>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </label>
        <label>
          ST Depression:
          <input
            type="number"
            name="oldpeak"
            step="0.1"
            value={data.oldpeak}
            onChange={handleChange}
          />
        </label>
        <label>
          Slope of the Peak Exercise ST Segment:
          <select name="slope" value={data.slope} onChange={handleChange}>
            <option value={0}>Upsloping</option>
            <option value={1}>Flat</option>
            <option value={2}>Downsloping</option>
          </select>
        </label>
        <label>
          Number of Major Vessels Colored by Fluoroscopy:
          <select name="ca" value={data.ca} onChange={handleChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
        <label>
          Thalassemia:
          <select name="thal" value={data.thal} onChange={handleChange}>
            <option value={0}>Normal</option>
            <option value={1}>Fixed Defect</option>
            <option value={2}>Reversible Defect</option>
          </select>
        </label>
      </form>
      {result && <h2 className="result">Result: {result}</h2>}
    </div>
  );
}

export default App;
