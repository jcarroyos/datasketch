import React from 'react';
import axios from "axios";

import Table from "./components/Table";

const baseURL = "http://localhost:3001/people/";

const columns = [
  { label: "Id", accessor: "id", sortable: true },
  { label: "picture", accessor: "picture", sortable: true },
  { label: "Full Name", accessor: "fullName", sortable: true },
  { label: "age", accessor: "age", sortable: true, sortbyOrder: "true" },
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
    <div className="table_container">
      <h1>Reusable sortable table with React</h1>
      <Table
        caption="Developers currently enrolled in this course. The table below is ordered (descending) by the Gender column."
        data={people}
        columns={columns}
      />
    </div>
  );
};

export default App;
