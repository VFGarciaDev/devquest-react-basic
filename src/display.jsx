import * as React from 'react'
import "./assets/styles/display.css"
import "./assets/styles/responsive.css"
import Input from "./assets/components/input/input"
import Output from './assets/components/output/output'
import Button from './assets/components/button/button'
import Select from './assets/components/select/select'
import { useState } from 'react'

export default function Display() {
  const [displayInputValue, setDisplayInputValue] = useState("");
  const [userInput, setUserInput] = useState("");

  const [displayTextColor, setDisplayTextColor] = useState("#000");
  const [userColor, setUserColor] = useState("");

  const [displayTextDecor, setDisplayTextDecor] = useState("none");
  const [userDecor, setUserDecor] = useState("");

  const [displayButtonName, setDisplayButtonName] = useState("");
  const [userButtonName, setUserButtonName] = useState("");

  const buttonLabels = ["Button", "Click here", "Press me", displayButtonName];

  const resetAll = () => {
    setDisplayInputValue("")
    setDisplayTextColor("")
    setUserColor("")
    setDisplayTextDecor("")
    setUserDecor("none")
  }

  const deleteButtonName = () => {
    setDisplayButtonName("")
    setUserButtonName("")
  }

  return (
    <>
      <main className='card'>
        <section>
          <Input
            placeholderText={"Type anything to style!"}
            handleChangeEvent={(e) => setUserInput(e.target.value)}
            valueToReset={userInput} />
          <Output
            children={displayInputValue}
            customColor={displayTextColor}
            customTextDecor={displayTextDecor} />
          <div className='style-section'>
            <div>
              <label>Choose a Color:</label>
              <div className='style-color'>
                <Input
                  placeholderText={"'name', 'hex', 'hsl', ..."}
                  handleChangeEvent={(e) => setUserColor(e.target.value)}
                  valueToReset={userColor} />
                <Button
                  label={"Change"}
                  handleButtonClick={() => setDisplayTextColor(userColor)} />
              </div>
            </div>
            <div>
              <label>Text transformation:</label>
              <div className='style-text'>
                <Select
                  handleSelectEvent={(e) => setUserDecor(e.target.value)}
                  valueToReset={userDecor} />
                <Button label={"Change"}
                  handleButtonClick={() => setDisplayTextDecor(userDecor)} />
              </div>
            </div>
          </div>
          <div className="style-btns">
            <Button label={"Style"}
              handleButtonClick={() => {
                setDisplayInputValue(userInput)
                setUserInput("")
              }} />
            <Button label={"Reset"} handleButtonClick={resetAll} />
          </div>
        </section>
        <section>
          <div className="dft-buttons">
            {buttonLabels
              .filter(name => name !== "")
              .map(name => <Button
                key={name} label={name}
                handleButtonClick={() => alert(`This button's label is: ${name}`)} />
              )}
          </div>
          <label>Create a new button:</label>
          <div className="create-btn">
            <Input
              placeholderText={"Choose a name"}
              handleChangeEvent={(e) => setUserButtonName(e.target.value)}
              valueToReset={userButtonName}
            />
            <Button label={"Create"}
              handleButtonClick={() => setDisplayButtonName(userButtonName)} />
            <Button label={"Delete"} handleButtonClick={deleteButtonName} />
          </div>
        </section>
      </main>
    </>
  )
}