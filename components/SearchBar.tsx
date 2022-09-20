import React from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import addTestIdentifiers from '../utils/addTestIdentifiers';

type SearchBarProps = {
    placeholderTextInputLabelText: string,
    onSubmit: Function,
  }

  type State = {
    textValue: string
  }
export default class SearchBar extends React.Component<SearchBarProps, State> {
    // Initialize our SearchBar's state to empty text
	constructor(props: SearchBarProps) {
		// We have to first call the parent's constructor 
		// The parent here is React.Component
		super(props);
		this.state = {
			textValue: '',
		};
	}

    handleChangeText = (newStockSymbolTextValue: any) => {
		// Update the textValue in the component's state
		this.setState({
			textValue: newStockSymbolTextValue
		});
	}

    handleSubmitEditing = () => {
		// Get a reference to the function onSubmit from the props passed in
		const { onSubmit }:any = this.props;
		// Get the textValue from the component's state
		const { textValue }: any = this.state;
		if (textValue.length > 0) {
			// Run the onSubmit function with the textValue as input
			onSubmit(textValue);
			// Clear the textValue from the component's state
			this.setState({
				textValue: '',
			});
		} else {
			return;
		}
	}

    render() {
		const { placeholderTextInputLabelText } = this.props;
		const { textValue } = this.state;
		return (
			<View>
				<View style={styles.container}>
					<TextInput 
						{...addTestIdentifiers('stockTickerSymbolSearchInput')} 
						style={styles.textInput}
						value={textValue}
						placeholder={placeholderTextInputLabelText}
						placeholderTextColor="white"
						underlineColorAndroid="transparent"
						clearButtonMode="always"
						autoCorrect={false}
						onChangeText={this.handleChangeText}
						onSubmitEditing={this.handleSubmitEditing}
					/>				
				</View>
				<TouchableOpacity
					{...addTestIdentifiers('stockTickerSymbolSearchBtn')}
          style={styles.submitButton}
          onPress={this.handleSubmitEditing}
      	>
					<Text style={[styles.buttonText, styles.textStyle]}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		marginTop: 20,
		backgroundColor: '#7F8C8D',
		marginHorizontal: 80,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	textInput: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
	},
	submitButton: {
		height: 40,
		marginTop: 10,
		backgroundColor: '#007AFF',
		marginHorizontal: 80,
		paddingHorizontal: 10,
		borderRadius: 5,
		justifyContent: 'center'
	},
	textStyle: {
		textAlign: 'center',
		color: 'white',
	},
	buttonText: {
		fontSize: 20,
	}
});