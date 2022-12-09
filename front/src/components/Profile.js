import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

const baseURL = "http://localhost:3001/people/"

const Profile = () => {
  const params = useParams()
  const [people, setProfile] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL+params.id).then((response) => {
      setProfile(response.data);
    });
    // eslint-disable-next-line
  }, []);
  
  if (!people) return null;

  return (
    <>
      <h1>{people.nickname}'s profile page</h1>
      <div className='profile'>
        <figure>
          <img className='avatar' alt={people.nickname + "'s avatar"} src={people.picture} />
        </figure>
        <h2>{people.nickname}</h2>
        <span><strong>id:</strong> {people.id}</span>
        <span><strong>fullName:</strong> {people.fullName}</span>
        <span><strong>age:</strong> {people.age}</span>
        <span><strong>occupation:</strong> {people.occupation}</span>
        <span><strong>gender:</strong> {people.gender}</span>
      </div>
    </>
  );
};

export default Profile;


