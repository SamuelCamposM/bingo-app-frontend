import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Paper, TableSortLabel, TextField } from "@mui/material";
import { Acciones, ModalLayout } from "../../components";
import { Create, Delete, FileCopy, PictureAsPdf } from "@mui/icons-material";
// import { agregarTransparencia } from "../../../helpers";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
];
// {
//   id: "density",
//   label: "Density",
//   minWidth: 170,
//   align: "right",
//   format: (value: number) => value.toFixed(2),
// },

const rows: any[] = [];

export const Page3 = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const actions = [
    {
      icon: <Create color="secondary" />,
      name: "Editar",
      onClick: (arg: any) => {
        console.log(arg);
      },
    },
    { icon: <FileCopy color="secondary" />, name: "Copiar", onClick: () => {} },
    { icon: <Delete color="error" />, name: "Eliminar", onClick: () => {} },
    {
      icon: <PictureAsPdf color="error" />,
      name: "Reporte PDF",
      onClick: () => {},
    },
  ];
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        position: "relative",
      }}
    >
      <ModalLayout open={open} setOpen={setOpen} />
      <TextField label="Buscar" size="small" />
      <TableContainer sx={{ flexGrow: 1 }}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <TableSortLabel active={true} direction={"desc"}>
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Acciones actions={actions} />
      <TablePagination
        sx={{
          minHeight: "52px",
        }}
        rowsPerPageOptions={[10, 20, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default Page3;
