import React from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import AppBar from '../components/AppBar';

const FileIcon = ({ type, ...rest }) => {
	const icon = type === 'pdf' ? 'picture-as-pdf' : 'image';
	return <List.Icon {...rest} icon={icon} />;
};

export default class MainListScreen extends React.Component {
	selectFile = (id) => {
		this.props.navigation.push('File', { id });
	};
	renderItem = ({ item: { id, type, name, size } }) => (
		<List.Item
			title={name}
			description={size}
			key={id}
			left={props => <FileIcon type={type} {...props} />}
			onPress={this.selectFile.bind(this, id)}
		/>
	);
	render() {
		const { screenProps } = this.props;
		const loading = !screenProps.documentList;
		return (
			<View>
				<AppBar title="Documents" />
				{loading ?
					<ActivityIndicator animating />
					:
					<FlatList
						data={screenProps.documentList}
						keyExtractor={({ id }) => id}
						renderItem={this.renderItem}
					/>
				}
			</View>
		);
	}
}
