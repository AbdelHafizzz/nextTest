import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Row from "./row";

export default function BasicTable() {
  const { data } = useContext(DataContext);
  const header = {
    title: "Title",
    lang: "Language",
    desc: "Description",
    action: "Actions",
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Row row={header} />
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
