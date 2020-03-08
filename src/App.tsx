import React, {FC, useState} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook, faUsers} from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  repos_url: string;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'repos_url'
>;

export interface User {
  name: string;
  public_repos: string;
  followers: number;
  repos_url: string;
  avatar_url: string;
  navigation: ProfileScreenNavigationProp;
}

const App: FC<User> = props => {
  const [username, setUsername] = useState(props.name);
  const [user, setUser] = useState<User>();

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const fetchUser = async () => {
    try {
      const {data} = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      setUser(data);
    } catch (e) {
      Toast.show('User not found');
    }
  };

  const renderCard = () => {
    if (user) {
      return (
        <View style={styles.list}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Repos', {url: user.repos_url})
            }>
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <Image
                  style={styles.imageCard}
                  source={{
                    uri: user.avatar_url,
                  }}
                />
              </View>
              <View style={styles.username}>
                <Text style={styles.h1}>{user.name}</Text>
              </View>

              <View style={styles.description}>
                <FontAwesomeIcon style={styles.icon} icon={faBook} size={24} />
                <Text style={styles.h1}> {user.public_repos} repos</Text>
              </View>
              <View style={styles.description}>
                <FontAwesomeIcon style={styles.icon} icon={faUsers} size={24} />
                <Text style={styles.h1}> {user.followers} followers</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={event => handleUsername(event)}
            onBlur={() => fetchUser()}
          />
        </View>

        {renderCard()}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#D8D8D8',
    marginLeft: 20,
    fontSize: 20,
  },
});

export default App;
