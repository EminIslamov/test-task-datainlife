import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../../redux/sections";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Goods() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const classes = useStyles();
  const sections = useSelector((state) => state.sections.items);

  const handleSetQuantity = (e, id, groupId) => {
    dispatch(setQuantity(e.target.value, id, groupId));
  };

  const filteredSection = sections.find((section) => {
    return section.rid === id;
  });


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Название товара</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Количество</TableCell>
            <TableCell>Сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredSection !== undefined && filteredSection.goods.map((good) => (
                <TableRow key={good.gid}>
                  <TableCell>{good.gid}</TableCell>
                  <TableCell>{good.gname}</TableCell>
                  <TableCell>{`${good.gprice} руб.`}</TableCell>
                  <TableCell>
                    <TextField
                      value={good.goodQuantity}
                      onChange={(e) =>
                        handleSetQuantity(e, good.gid, good.ggroup_id)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {good.goodQuantity !== undefined
                      ? Number(good.goodQuantity) * Number(good.gprice)
                      : 0}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Goods;
