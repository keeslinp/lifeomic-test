import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import AppBar from '../components/AppBar';

export default class FileScreen extends React.Component {
	buildBody = (type, filePath) => {
		const { api } = this.props.screenProps;
    const uri = `http://${api}${filePath}`;
		switch (type) {
			case 'pdf':
				return <Text> PDF </Text>;
			case 'image':
				return <Image source={{ uri }} style={styles.imageStyle} />;
      default:
				return <Text> Unknown file type </Text>;
		}
	};
	render() {
		const id = this.props.navigation.getParam('id', null);
		const documentObj = this.props.screenProps.documentList.find(doc => doc.id === id);
		const { name, size, type, self } = documentObj;
		return (
			<View>
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
    width: 100,
		height: 100,
	},
});
