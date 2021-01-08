import React,{useState} from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { ProgressBar } from "react-bootstrap";

const ProgressBarFormatter = ({ value }) => {
  return <ProgressBar now={value} label={`${value}%`} />;
};

const columns = [
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "percentage", name: "Percentage", formatter: ProgressBarFormatter }
];



function Example() {
  const [data, setdata] = useState([])

    fetch('http://127.0.0.1:5000/student/leaderboard/')
    .then( response => response.json())
    .then(response => setdata(response))
    .then(data => console.log(data));
    
  
    
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => data[i]}
      rowsCount={data.length}
    />
  );
}


export default Example;
