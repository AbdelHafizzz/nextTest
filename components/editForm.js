import { useState, useContext, useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "./button";
import Input from "./input";
import { DataContext } from "../contexts/dataContext";

const EditForm = (props) => {
  const router = useRouter();
  const { data, setData } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [lang, setLang] = useState("");
  const [desc, setDesc] = useState("");

  const titleToUpdate = props.router.query.title;
  const langToUpdate = props.router.query.lang;
  const descToUpdate = props.router.query.desc;

  useEffect(() => {
    setTitle(titleToUpdate);
    setDesc(descToUpdate);
    setLang(langToUpdate);
  }, [descToUpdate, langToUpdate, titleToUpdate]);

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setLang(e.target.value);
  };

  const handleUpdate = () => {
    setData([{ title: title, lang: lang, desc: desc }, ...data]);
    router.push("/");
  };

  return (
    <div className="form">
      <h2 className="title">Add a tutorial:</h2>
      <Input
        onChange={handleTitle}
        value={title}
        placeholder="Enter The Title"
      />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: "100%" }}>
        <Select
          className="select"
          displayEmpty
          onChange={handleSelect}
          value={lang}
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
        onChange={handleDesc}
        value={desc}
        placeholder="Enter a Description"
      />
      <Button onClick={handleUpdate} value="Update" />
    </div>
  );
};

export default withRouter(EditForm);
