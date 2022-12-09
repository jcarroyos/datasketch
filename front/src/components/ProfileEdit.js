import React, { useEffect, useState } from 'react';
//import axios from "axios";
import { Container, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUser, getallUsers} from './service/api';
import { useNavigate, useParams } from 'react-router-dom'

//const baseURL = "http://localhost:3001/people/";
//const profileURL = "http://localhost:3002/profile/";

const initialValue = {
    fullname: "",
    age: "",
    occupation : "",
    nickname: "",
    gender: "",
    picture: "",
}


const ProfileEdit = () => {
 
    const [user, setUser] = useState(initialValue);
    const {fullname, nickname, age, gender, occupation} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
        // eslint-disable-next-line
    },[]);
    
    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const navigate = useNavigate();
    const onValueChange = (e) =>
    {
        console.log(e);
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       navigate('/profile/'+id);
    }

    const sendSubmit = () => {
        navigate("/profile/"+id);
    };
    
  return (
    <>
        <h1>Edit user profile data</h1>
        <Container>
            <Box my={5}>
            <FormGroup>
                <FormControl>
                    <InputLabel>Fullname</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="fullname" value={fullname || ''} />
                </FormControl>
                <FormControl>
                    <InputLabel>Age</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="age" value={age || ''} />
                </FormControl>
                <FormControl>
                    <InputLabel>Occupation</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="occupation" value={occupation || ''} />
                </FormControl>
                <FormControl>
                    <InputLabel>Nickname</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="nickname" value={nickname || ''} />
                </FormControl>
                <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="gender" value={gender || ''} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update User</Button>
                    <Button onClick={()=> sendSubmit()} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    </>
  );
};



export default ProfileEdit;


