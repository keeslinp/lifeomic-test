import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import Pdf from 'react-native-pdf';
import AppBar from '../components/AppBar';

export default class FileScreen extends React.Component {
	buildBody = (type, filePath) => {
		const source = { uri: `http://localhost:3000${filePath}` };
		switch (type) {
			case 'pdf':
				return (
					<View style={styles.pdfContainer}>
						<Pdf source={source} style={styles.pdf} />
					</View>
				);
			case 'image':
				return <Image source={source} style={styles.imageStyle} />;
			default:
				return <Text> Unknown file type </Text>;
		}
	};
	render() {
		const id = this.props.navigation.getParam('id', null);
		const documentObj = this.props.screenProps.documentList.find(doc => doc.id === id);
		const { name, size, type, self } = documentObj;
		// const source = { uri: `http://localhost:3000${self}` };
		// return (
		// <View style={styles.container}>
		// <Pdf source={source} style={styles.pdf} />
		// </View>
		// );
		return (
			<View style={styles.container}>
				<AppBar title={name} goBack={() => this.props.navigation.goBack()}>
					<Text style={styles.fileSize}>{size}</Text>
				</AppBar>
				{this.buildBody(type, self)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fileSize: {
		color: '#fff',
		marginRight: 10,
	},
	imageStyle: {
		marginTop: 10,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height / 1.5,
	},
	container: {
		flex: 1,
	},
	pdfContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 25,
		zIndex: -1,
	},
	pdf: {
		flex: 1,
		width: Dimensions.get('window').width,
	}
});
