import { useEffect, useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButton from "./components/RadioButton/RadioButton";
import Button from "./components/Button/Button";
import spinner from "./assets/spinner.png";
import SelectButton from "./components/SelectButton/SelectButton";
import CheckBoxGroup from "./components/CheckBoxGroup/CheckBoxGroup";
import CheckBoxGroup2 from "./components/CheckBoxGroup2/CheckBoxGroup2";

function App() {
  const [datas, setDatas] = useState(null);
  const [selected, setSelected] = useState("");

  // fetching data for options in select button
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  return (
    <div className=" space-y-10 px-20 mb-40">
      <InputField></InputField>

      <Button>
        <span>Button CTA</span>
        <span className="w-5 h-5">
          <img src={spinner} alt="" />
        </span>
      </Button>

      <Textarea></Textarea>

      <SelectButton
        datas={datas}
        selected={selected}
        setSelected={setSelected}
      ></SelectButton>

      <ToggleButton></ToggleButton>

      <Checkbox></Checkbox>

      <RadioButton></RadioButton>

      <CheckBoxGroup></CheckBoxGroup>

      <CheckBoxGroup2></CheckBoxGroup2>
    </div>
  );
}

export default App;
