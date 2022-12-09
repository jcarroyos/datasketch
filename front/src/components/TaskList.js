import React from 'react';
import axios from "axios";
import '../App.css';

import Table from "../components/Table";

const baseURL = "http://localhost:3001/tasks/";

const columns = [
  { label: "Id", accessor: "id", sortable: true },
  { label: "title", accessor: "title", sortable: false },
  { label: "description", accessor: "description", sortable: true },
  { label: "completed", accessor: "completed", sortable: true, sortbyOrder: "true" },
  { label: "startDate", accessor: "startDate", sortable: true },
  { label: "endDate", accessor: "endDate", sortable: true },
  { label: "personId", accessor: "personId", sortable: true }
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
