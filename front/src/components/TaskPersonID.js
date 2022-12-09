import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

const baseURL = "http://localhost:3001/tasks/";

const TaskPersonID = () => {
  const params = useParams()
  const [tasks, setTasks] = React.useState(null);
  

  React.useEffect(() => {
    axios.get(baseURL+params.personId).then((response) => {
        setTasks(response.data);
    });
    // eslint-disable-next-line
  }, []);
  
  if (!tasks) return null;


  return (
    <>
      <h3>{tasks.title}</h3>
      <div className='profile'>
        <h2>{tasks.nickname}</h2>
        <span><strong>id:</strong> {tasks.id}</span>
        <span><strong>description:</strong> {tasks.description}</span>
        <span><strong>completed:</strong> {tasks.completed}</span>
        <span><strong>startDate:</strong> {tasks.startDate}</span>
        <span><strong>endDate:</strong> {tasks.endDate}</span>
        <span><strong>personId:</strong> {tasks.personId}</span>
      </div>
    </>
  );
};


export default TaskPersonID;


