import { useState, useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter, withRouter } from "next/router";

const TutorialCard = (props) => {
  const [item, setItem] = useState("");
  const { data } = useContext(DataContext);
  const router = useRouter();
  const titleToView = props.router.query.title;

  (async () => {
    const itemToView = await data.find((x) => x.title === titleToView);
    setItem(itemToView);
  })();

  const handleBack = () => {
    router.back();
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: "5%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Best Tutorials
        </Typography>
        <Typography variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.lang}
        </Typography>
        <Typography variant="body2">{item.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleBack}>
          <ArrowBackIcon />
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(TutorialCard);
