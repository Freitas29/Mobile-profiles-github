import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

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
        const {data} = await axios.get(url);
        setUserList(data);
      } catch (e) {
        console.log(e);
      }
    };
    getRepos();
  }, [url]);

  return (
    <>
      <View>
        <View>
          <Text>{url}</Text>
        </View>
      </View>
    </>
  );
};

export default App;
