import React from 'react';

import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import 'font-awesome/css/font-awesome.min.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Container from '@material-ui/core/Container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import logo from './logo152.png';

const StyledTableCell = withStyles((theme) => ({
  head: {
    
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,part, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),
  createData('https://www.linkpicture.com/q/laptop_2.png','Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'ssssss', 6.0, 24, 4.0),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function App() {
  return (
 
    <Container maxWidth="">
         <h2>Customer Master</h2>
 
 
  <Tabs>
    <TabList>
      <Tab>Company</Tab>|
      <Tab >Contact</Tab> |
      <Tab>Company  Address Book</Tab> |
      <Tab>Company Favorite</Tab> |
      <Tab>Spacial Pricing</Tab> |
      <Tab> Credit Card</Tab>
    </TabList>
    
    <div style={{paddingLeft:"2px",display:"flex", backgroundColor:"rgba(0, 0, 0, 0.04)", paddingLeft:"12px", paddingRight:"12px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",}} className="flex" >
    <input className="" placeholder="&#xF002; Search Products ... "  style={{alignSelf: "flex-start",focus:"none", border:"none",backgroundColor:"rgba(0, 0, 0, 0.0)",  paddingBottom:"12px",paddingTop:"12px",marginTop:"24px",marginBottom:"12px"}}></input>
    <div  style={{alignSelf: "flex-end",paddingBottom:"12px",paddingTop:"12px",marginTop:"12px",marginBottom:"12px"}}>

    <label className="dropdown">

<div className="dd-button2">
  2- 200 of 2,000 
</div>

<input type="checkbox" className="dd-input" id="test"/>

<ul className="dd-menu">
  <li>Add Product</li>
  <li>Add Product Group</li>

 
</ul>

</label>
    <label className="dropdown">

<div className="dd-button3">
 Sort
</div>

<input type="checkbox" className="dd-input" id="test"/>



</label>
    <label className="dropdown">

<div className="dd-button3">
 Filter 
</div>

<input type="checkbox" className="dd-input" id="test"/>



</label>
    <label className="dropdown">

<div className="dd-button">
  Add
</div>

<input type="checkbox" className="dd-input" id="test"/>

<ul className="dd-menu">
  <li>Add Product</li>
  <li>Add Product Group</li>

 
</ul>

</label>

    </div>

    </div>
    <TabPanel>
    <TableContainer maxWidth="sm" style={{paddingLeft:"2px"}} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead style={{backgroundColor:"#0275d8"}}>
          <TableRow>
          <input type="checkbox" style={{marginLeft:"22px",marginTop:"18px"}} id="vehicle1" name="vehicle1" value="Bike"></input>
          <select  style={{marginLeft:"22px",marginTop:"18px"}} name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  
  </select>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="left">Part #</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Mr. Name </StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Catolog</StyledTableCell>
            <StyledTableCell align="right">Entered By</StyledTableCell>
            <StyledTableCell align="right">Icon</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <input type="checkbox"  style={{marginLeft:"22px",marginTop:"18px"}} id="vehicle1" name="vehicle1" value="Bike"></input>
              <select  style={{marginLeft:"22px",marginTop:"18px"}} name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  
  </select>
              <StyledTableCell component="th" scope="row">
                <img style={{height:"32px"}} src={row.name}  alt=""/>
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TabPanel>
    <TabPanel>
    <p>
       <h1>Contact</h1>
    
      </p>
    </TabPanel>
    <TabPanel>
    <p>
       <h1>Company  Address Book</h1>
    
      </p>
    </TabPanel>
    <TabPanel>
    <p>
       <h1>Company Favorite</h1>
    
      </p>
    </TabPanel>
    <TabPanel>
    <p>
       <h1>Spacial Pricing</h1>
    
      </p>
    </TabPanel>
    <TabPanel>
    <p>
       <h1>Pricing</h1>
    
      </p>
    </TabPanel>
  </Tabs>

  
    </Container>
  );
}

export default App;
