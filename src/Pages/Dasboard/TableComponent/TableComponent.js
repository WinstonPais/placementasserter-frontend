import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, makeStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import styles from './TableComponent.module.css';

const columns = [
    { 
      id: 'Sno', 
      label: 'Serial No', 
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'college_name',
      label: 'Name of the college',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'hire',
      label: 'No.of Students',
      minWidth: 170,
      align: 'center',
    },
];

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgb(54 54 86)',
      },
      '&:nth-of-type(even)': {
        backgroundColor: 'rgb(88 80 111)',
      },
    },
}))(TableRow);

const allUniData = require('./UniData.json');

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

const TableComponent = () => {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const getAllRowsData = () => {
      return allUniData.map((uniData, index)=>{
        return { 
          'Sno' : index + 1,
          'college_name' : uniData["College"],
          'hire' : uniData["hire"]
        }
      });
    }
  
    const rows = getAllRowsData();
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper className={[classes.root, styles.transparentBG].join(' ')}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className={[styles.nobottomBorder, styles.headerStyle].join(' ')}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <StyledTableRow role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                          className={[styles.nobottomBorder, styles.textColorWhite].join(' ')} 
                          key={column.id} 
                          align={column.align}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={styles.textColorWhite}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          style={{ backgroundColor: 'black' }}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
} 

export default TableComponent