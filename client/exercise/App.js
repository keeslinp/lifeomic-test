import React from 'react';
import Navigator from './navigation/Navigator';

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
		const url = `http://localhost:3000/api/documents`;
		const resp = await fetch(url);
		const json = await resp.json();
		return json.documents;
	};
  render() {
    return (
      <Navigator screenProps={{ 
        ...this.state.remoteData,
	    }} />
    );
  }
}
