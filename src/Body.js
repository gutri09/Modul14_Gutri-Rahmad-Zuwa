import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#59981A' ,
    color: theme.palette.common.white,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(title, subtitle, isbn13, price, image, url) {
  return { title, subtitle, isbn13, price, image, url };
}

const rows = [
  createData('Deno Succinctly','' , '9781642002140', '$0.00', 'https://itbook.store/img/books/9781642002140.png', 'https://itbook.store/books/9781642002140'),
  createData('Robotics, AI, and Humanity', 'Science, Ethics, and Policy', '9783030541729', '$59.99', 'https://itbook.store/img/books/9783030541729.png', 'https://itbook.store/books/9783030541729'),
  createData('Introduction to Autonomous Robots, 3rd EditionEclair', '', '9781493773077', '$20.99', 'https://itbook.store/img/books/9781493773077.png', 'https://itbook.store/books/9781493773077'),
  createData('Learning Go', 'An Idiomatic Approach to Real-World Go Programming', '9781492077213', '$35.88', 'https://itbook.store/img/books/9781492077213.png','https://itbook.store/books/9781492077213'),
  createData('Open Workbook of Cryptology', 'A project-based introduction to crypto in Python', '1001656678502', '$0.00', 'https://itbook.store/img/books/1001656678502.png','https://itbook.store/books/1001656678502'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, }} aria-label="customized table" style={{ width: '80%', margin:'auto'}}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Subtitle</StyledTableCell>
            <StyledTableCell align="center">ISBN13</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">{row.subtitle}</StyledTableCell>
              <StyledTableCell align="center">{row.isbn13}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center"><img src={row.image}></img></StyledTableCell>
              <StyledTableCell align="center"><a href={row.url}>{row.url}</a></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
