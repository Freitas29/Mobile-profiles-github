import React, {FC} from 'react';
import {Text, View} from 'react-native';

type RootStackParamList = {
  url: object;
};

type Props = {
  params: RootStackParamList;
};

export interface Repos {
  name: string;
  route: Props;
}

const App: FC<Repos> = props => {
  const {url} = props.route.params;
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
