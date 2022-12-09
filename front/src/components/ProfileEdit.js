import React, {useCallback} from 'react';
import axios from "axios";
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-dom'

const baseURL = "http://localhost:3001/people/";
const profileURL = "http://localhost:3002/profile/";

const ProfileEdit = () => {
  const params = useParams()
  const [people, setProfile] = React.useState(null);

  let url=profileURL+params.id;
  const handlePress = useCallback(async () => {
    
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url, '_self');
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  React.useEffect(() => {
    axios.get(baseURL+params.id).then((response) => {
      setProfile(response.data);
    });
    // eslint-disable-next-line
  }, []);
  
  if (!people) return null;

  return (
    <>
      <h1 style={styles.h1}>Edit {people.nickname}'s profile</h1>
      <View style={styles.boton}>
          <Button color={'#f72585ff'} onPress={handlePress} title="Save"/>
      </View>
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

const styles = StyleSheet.create({
  boton: {
    align: 'right',
    width: 100,
    justifyContent: "center",
    float: 'right'
  },
  h1:{
    color: '#f72585ff'
  }
});

export default ProfileEdit;


