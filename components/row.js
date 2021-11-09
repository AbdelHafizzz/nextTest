import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { useRouter } from "next/router";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "./button";

const Row = (props) => {
  const { data, setData } = useContext(DataContext);
  const router = useRouter();

  const row = props.row;

  const handleView = (row) => {
    router.push({
      pathname: "tutorial",
      query: { title: row.title },
    });
  };

  const handleDelete = (row) => {
    const updatedData = data.filter(
      (item) => data.indexOf(item) != data.indexOf(row)
    );
    setData(updatedData);
  };

  const handleEdit = async(row) => {
    await router.push({
      pathname: "edit",
      query: { title: row.title, desc: row.desc, lang: row.lang },
    });
    handleDelete(row);
  };

  return (
    <TableRow
      key={row.title}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.title}
      </TableCell>
      <TableCell align="left">{row.lang}</TableCell>
      <TableCell
        align="left"
        style={{
          maxWidth: "300px",
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {row.desc}
      </TableCell>
      <TableCell align="left">
        {row.action ? (
          "Actions"
        ) : (
          <div className="actionsDiv">
            <Button value="View" onClick={() => handleView(row)} />
            <Button value="Edit" onClick={() => handleEdit(row)} />
            <Button value="Delete" onClick={() => handleDelete(row)} />
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};
export default Row;
