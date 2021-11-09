import Button from "@mui/material/Button";

const Buttonn = (props) => {
  return (
    <div className="btnDiv">
      <Button className="button" variant="contained" onClick={() => props.onClick()}>
        {props.value}
      </Button>
    </div>
  );
};
export default Buttonn;
