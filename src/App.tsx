import React, {FC, useState} from 'react';
import {TextInput, Text, StyleSheet, View, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook, faUsers} from '@fortawesome/free-solid-svg-icons';

export interface User {
  name: string;
}

const App: FC<User> = props => {
  const [username, setUsername] = useState(props.name);

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={event => handleUsername(event)}
          />
        </View>

        <View style={styles.list}>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Image
                style={styles.imageCard}
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/37782205?s=460&v=4',
                }}
              />
            </View>
            <View style={styles.username}>
              <Text style={styles.h1}>Teste</Text>
            </View>

            <View style={styles.description}>
              <FontAwesomeIcon style={styles.icon} icon={faBook} size={24} />
              <Text style={styles.h1}> 2 repos</Text>
            </View>
            <View style={styles.description}>
              <FontAwesomeIcon style={styles.icon} icon={faUsers} size={24} />
              <Text style={styles.h1}>{username} 9 followers</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000',
    color: '#D8D8D8',
  },
  search: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#7954c4', //hover dele #885CCA
    color: '#f5e9fa',
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },
  list: {
    flex: 1,
  },
  description: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  username: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginTop: '15%',
    width: '100%',
    height: 350,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  cardTop: {
    width: '100%',
    marginBottom: 25,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    color: '#fff',
    fontSize: 120,
  },
  h1: {
    color: '#D8D8D8',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: '#D8D8D8',
    marginLeft: 20,
    fontSize: 20,
  },
});

export default App;
