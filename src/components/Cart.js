import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { remAtCart } from '../redux/action';
import { Button } from '@mui/material';

export const Cart = () => {

  const cartProduct = useSelector(state => state.cartProductreducer)
  const dispatch = useDispatch()

  const totalPrice = cartProduct.reduce((acc, val) => {
    return acc + val.price
  }, 0)

  return (
    <TableContainer component={Paper} className='cart'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">Image</TableCell>
            <TableCell align="right">Price&nbsp;(Rs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProduct.map((row) => (
            <TableRow
            
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <img src={row.image} height="50" width="50" />
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell color='error' ></TableCell>
              <TableCell  >
                <Button color='error' onClick={() => dispatch(remAtCart(row.id))}><DeleteOutlineIcon /></Button>
              </TableCell>

            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} align="left" >Total</TableCell>
            <TableCell align="right" >{totalPrice}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
