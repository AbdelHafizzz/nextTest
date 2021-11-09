import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "./button";
import Input from "./input";
import { DataContext } from "../contexts/dataContext";

const Form = (props) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [lang, setLang] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
  const { data, setData } = useContext(DataContext);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSelect = (e) => {
    setLang(e.target.value);
  };

  const handleSubmit = () => {
    if (title != "" && lang != "" && desc != "") {
      setError(false);
      setData([{ title: title, lang: lang, desc: desc }, ...data]);
      router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="form">
      <h2 className="title">Add a tutorial:</h2>
      <Input
        value={title}
        onChange={handleTitle}
        placeholder="Enter The Title"
      />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: "100%" }}>
        <Select
          className="select"
          displayEmpty
          value={lang}
          onChange={handleSelect}
        >
          <MenuItem value="">
            <em>Languages</em>
          </MenuItem>
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="javascript">Javascript</MenuItem>
          <MenuItem value="c#">C#</MenuItem>
        </Select>
      </FormControl>
      <Input
        value={desc}
        onChange={handleDesc}
        placeholder="Enter a Description"
      />
      <Button onClick={handleSubmit} value="Submit" />
      {error ? (
        <div className="error">
          <h2>All fields are required</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
