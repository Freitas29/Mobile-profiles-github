import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';


type RootStackParamList = {
  url: string;
};

type Props = {
  params: RootStackParamList;
};

export interface Repos {
  name: string;
  route: Props;
}

const App: FC<Repos> = props => {
  const [userList, setUserList] = useState();
  const url = props.route.params.url;

  useEffect(() => {
    const getRepos = async () => {
      try {
        const { data } = await axios.get(url);
        setUserList(data);
      } catch (e) {
        Toast.show('Error to fetch repos');
      }
    };
    getRepos();
  }, [url]);

  return (
    <>
      <View style={styles.root}>
        <View style={styles.list}>
          <View style={styles.card}>
            <Text style={styles.h1}>ApiNode</Text>
            <View style={styles.details}>
              <View style={styles.detailsIcon}>
                <FontAwesomeIcon icon={faCodeBranch} size={24} />
                <Text style={styles.p}> 0 </Text>
              </View>

              <View style={styles.detailsIcon}>
                <FontAwesomeIcon icon={faStar} size={24} color={ '#fdcb6e' }/>
                <Text style={styles.p}> 0 </Text>
              </View>
            </View>
            <Text style={styles.description}>
              Uma api rest em NodeJs utilizando express e MongoDb. Essa api foi feita seguindo passos do Curso em Node
            </Text>
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
  },
  list: {
    marginTop: 20,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#7954c4',
    borderRadius: 15,
    padding: 15,
  },
  h1: {
    fontSize: 24,
    color: '#D8D8D8',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailsIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    textAlign: 'justify',
    lineHeight: 20.5,
    fontSize: 16,
    color: '#FFF',
  },
  p: {
    color: "#fff",
    fontSize: 20,
  }
});

export default App;
