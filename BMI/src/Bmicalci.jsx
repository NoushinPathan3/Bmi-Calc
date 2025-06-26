import React, { useState } from "react";

function Bmicalci(){
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const Bmi = () => {
        if (weight && height) {
            const Mheight = height / 100;
            const calculateBmi = (weight / (Mheight * Mheight)).toFixed(2);
            setBmi(calculateBmi);
        } else {
            alert("Please enter the valid details!");
        }
    };
    function Bmigroup(){
        if (bmi < 18.5) {
            return { group: "Underweight" };
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return { group: "Normal weight" };
        } else if (bmi >= 25 && bmi < 29.9) {
            return { group: "Overweight" };
        } else if (bmi >= 30) {
            return { group: "Obesity" };
        } else {
            return { group: "none" };
        }
    };
    return (
        <div className="container">
            <h1>BMI Calculator </h1>
            <div className="box1">
            <div className="age">
                <label htmlFor="age">Age : </label> <br />
                <input type="text" id="age" placeholder="Enter your age" /> <br />
            </div> <br />
            <div className="gen">
                <label htmlFor="Gender">Select your Gender : </label> <br />
                <input type="radio" name="gender" id="Male" value="Male"/>
                <label htmlFor="Gender">Male</label>
                <input type="radio" name="gender" id="Female" value="Female"/>
                <label htmlFor="Gender">Female</label>
            </div> <br />
            <div className="wgt">
                <label htmlFor="weight">Weight(in kg) :</label> <br />
                <input type="number" id="weight" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div> <br />
            <div className="hgt">
                <label htmlFor="height">Height(in cm) :</label> <br />
                <input type="number" id="height" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>  <br />
            </div>
            <div className="box2">
            <button onClick={Bmi}>Calculate BMI</button>
            {bmi && (
                <div className="result">
                    <h2>Your BMI index is : {bmi} kg/m²</h2>
                    <h3 style={{ color: Bmigroup().color }}></h3>
                    <h5>Category: {Bmigroup().group}</h5> 
                </div>
            )}
            </div>
        </div>
    )
}

export default Bmicalci;