import React from 'react';
import { Constants } from "expo";
import Navigator from './navigation/Navigator';

const { manifest } = Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
  : `api.example.com`;

export default class App extends React.Component {
	state = {
		remoteData: {
      documentList: null,
		},
	};
  componentDidMount() {
	  this.fetchDocuments().then(documentList => {
		  this.setState(({ remoteData }) => ({
			  remoteData: {
				  ...remoteData,
				  documentList,
			  },
		  }));
	  });
  }
	fetchDocuments = async () => {
		const url = `http://${api}/api/documents`;
		const resp = await fetch(url);
		const json = await resp.json();
		return json.documents;
	};
  render() {
    return (
      <Navigator screenProps={{ 
        ...this.state.remoteData,
		    api,
	    }} />
    );
  }
}
