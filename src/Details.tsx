import React, {FC} from 'react';
import {Text, View} from 'react-native';

export interface Repos {
  name: string;
}

const App: FC<Repos> = () => {
  return (
    <>
      <View>
        <View>
          <Text>Ola testeteeee</Text>
        </View>
      </View>
    </>
  );
};

export default App;
