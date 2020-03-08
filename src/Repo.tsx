import React, {FC} from 'react';
import {WebView} from 'react-native-webview';
type RepoStackParamList = {
  repo: string;
};

type Props = {
  params: RepoStackParamList;
};

export interface Params {
  route: Props;
}

const Repos: FC<Params> = props => {
  return <WebView source={{uri: props.route.params.repo}} />;
};

export default Repos;
