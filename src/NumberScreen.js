import React, {Component} from 'react'
import {Button, Text, View} from "react-native";
import {connect} from 'react-redux'
import {addNumber, substractNumber} from "./Action";

class NumberScreen extends Component {

    addNumber = () => {
        this.props.addNumber()
    }

    substractNumber = () => {
        this.props.substractNumber()
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Button title={'-'} onPress={this.substractNumber}/>
                {
                    <Text style={{margin: 30}}>{this.props.number}</Text>
                }
                <Button title={'+'} onPress={this.addNumber}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.number.number
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: () => dispatch(addNumber()),
        substractNumber: () => dispatch(substractNumber())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberScreen)
