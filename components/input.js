import OutlinedInput from "@mui/material/OutlinedInput";

const Input = (props) => {
  return (
    <OutlinedInput
      value={props.value}
      required
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="input"
    />
  );
};
export default Input;
