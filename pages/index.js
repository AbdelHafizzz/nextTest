import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Table from "../components/table";
import Button from "../components/button";

const Homepage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create');
  };

  return (
    <Container maxWidth="md">
      <div className="homeHeader">
        <h1>Tutorials</h1>
        <Button onClick={handleClick} value="Add Tutorial" />
      </div>
      <Table />
    </Container>
  );
};

export default Homepage;
