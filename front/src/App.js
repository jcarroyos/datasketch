import React from 'react';
import axios from "axios";
import './App.css';

import Table from "./components/Table";

const baseURL = "http://localhost:3001/people/";

const columns = [
  { label: "Id", accessor: "id", sortable: true },
  { label: "Picture", accessor: "picture", sortable: false },
  { label: "Full Name", accessor: "fullname", sortable: true },
  { label: "Age", accessor: "age", sortable: true, sortbyOrder: "true" },
  { label: "Ocupation", accessor: "occupation", sortable: true }
];

const App = () => {

  const [people, setPeople] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPeople(response.data);
    });
  }, []);
  
  if (!people) return null;

  return (
    <>
      <h1>Frontend coding test by @jcarroyos</h1>
      <Table
        data={people}
        columns={columns}
      />
      </>
  );
};

export default App;
