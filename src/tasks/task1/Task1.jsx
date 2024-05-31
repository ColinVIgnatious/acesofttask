import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Task1() {
    const url='https://jsonplaceholder.typicode.com/postsi'
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    
  function useFetch(url){
            useEffect(()=>{
            setTimeout(()=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>{setData(data)
                setLoading(false)
            })
            .catch(error=>{
                console.error("ERROR",error)
                setLoading(false)
            })
            },2000)
           
        },[])
            }

            useFetch(url);
   

    // const onRefresh=()=>{
    //     useFetch(url);
    // }

    if(loading){
        return <div>Loading</div>
    }
  return (
    <>
    <div>Task1</div>
    {/* <button onClick={onRefresh()}>REFRESH</button> */}
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default Task1




