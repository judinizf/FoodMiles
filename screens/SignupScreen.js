import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Input, Item, Button, StyleProvider, Container, Header, Content, Card, CardItem, Icon, Left} from 'native-base';
import axios from 'axios';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class SignupScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cpf: '',
            email: '',
            password: '',
            telephone: '',
        }
    }

    onLogin = () => {

        console.log("name: " + String(this.state.name) + "cpf: " + String(this.state.cpf) + "email: " + String(this.state.email) + " password: " + String(this.state.password));

        axios.post('https://food-miles.herokuapp.com/signup', {
            name: this.state.name,
            cpf: this.state.cpf, 
            email: this.state.email, 
            password: this.state.password,
            telephone: this.state.telephone,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.v5}>
                    <Text> </Text>
                </View>

                <View style={styles.v1}>
                    <Image source={{uri: 'https://i.imgur.com/WJOAW4E.png'}} style={{height: 150, width: 150, flex: 1}}/>
                </View>    

                <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ name: value }) }}
                            placeholder='Nome' />
                    </Item>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ cpf: value }) }}
                            placeholder='CPF' />
                    </Item>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ email: value }) }}
                            placeholder='Login' />
                    </Item>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ password: value }) }}
                            placeholder='Senha' />
                    </Item>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ telephone: value }) }}
                            placeholder='Telefone' />
                    </Item>
                </View>

                <View style={styles.v4}>
                    <Button transparent style={{ padding: 151 }}
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'Product' })
                                ],
                            }))
                        }}>
                        <Text>CADASTRAR</Text>
                    </Button>
                </View>

                <Text style={{ fontSize: 50 }}>  {this.state.nome}  </Text>

            </View>
        );
    }
}

//ESTILOS PARA CADA UM DOS COMPONENTES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7ED',
    },
    v1: {
        height: 150,
        width: 150,
        backgroundColor: '#F4F7ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2: {
        flex: 1,
        color: '#7FA99B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v4: {
        height: 44,
        width: 385,
        backgroundColor: '#7FA99B',
        borderRadius: 30,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v5: {
        color: '#7FA99B',
    }
});