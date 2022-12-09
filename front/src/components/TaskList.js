import React from 'react';
import axios from "axios";
import '../App.css';

import Table from "../components/Table";

const baseURL = "http://localhost:3001/tasks/";

const columns = [
  { label: "Id", accessor: "id", sortable: true },
  { label: "Title", accessor: "title", sortable: false },
  { label: "Description", accessor: "description", sortable: true },
  { label: "Completed", accessor: "completed", sortable: true, sortbyOrder: "true" },
  { label: "Start date", accessor: "startdate", sortable: true },
  { label: "End date", accessor: "enddate", sortable: true },
  { label: "Person id", accessor: "personid", sortable: true }
];

const App = () => {

  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTasks(response.data);
    });
  }, []);
  
  if (!tasks) return null;

  return (
    <>
      <h1>Frontend coding test by @jcarroyos</h1>
      <Table
        data={tasks}
        columns={columns}
      />
      </>
  );
};

export default App;
