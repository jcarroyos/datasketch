import React from 'react';
import axios from "axios";

import Table from "./components/Table";

const baseURL = "http://localhost:3001/people/";

const columns = [
  { label: "Id", accessor: "id", sortable: true },
  { label: "Picture", accessor: "picture", sortable: false },
  { label: "Full Name", accessor: "fullName", sortable: true },
  { label: "age", accessor: "age", sortable: true },
  { label: "Ocupation", accessor: "occupation", sortable: true, sortbyOrder: "true" }
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
