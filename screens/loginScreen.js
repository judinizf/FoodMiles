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
import { axios } from 'axios';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        //title: 'X'
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            senha: '',
        }
    }

    onLogin = () => {
        axios.post('https://food-miles.herokuapp.com/login', {
            login: this.state.login,
            senha: this.state.senha,
        })
        .then(function (response) {
            //VERIFICAR SE RETORNOU CERTO OU ERRADO
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            //OS COMPONENTES DA TELA TEM QUE SER CRIADO AQUI DENTRO
            <View style={styles.container}>

                <View style={styles.v5}>
                    <Header transparent>
                        <Left>
                            <Button transparent dark >
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                    </Header>
                </View>

                <View style={styles.v1}>
                    <Image source={{uri: 'https://i.imgur.com/CAsiB8Y.png'}} style={{height: 200, width: 200, flex: 1}}/>
                </View>    

                <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ login: value }) }}
                            placeholder='Login' />
                    </Item>
                    <Item>
                        <Input
                            onChangeText={(value) => { this.setState({ senha: value }) }}
                            placeholder='Senha' />
                    </Item>
                </View>

                <View style={styles.v4}> 
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button transparent style={{ padding: null }} 
                            onPress={() => {this.onLogin();}}>
                            <Text>ENTRAR </Text>
                        </Button>
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    <Button rounded style={{ justifyContent: 'center', alignItems: 'center', width: 385 }} 
                        onPress={() => {this.onLogin();}}>
                        <Text>ENTRE COM FACEBOOK</Text>
                    </Button>
                </View>

                <View style={{ margin: 20 }}>
                    <Button info rounded style={{ justifyContent: 'center', alignItems: 'center', width: 385 }} 
                        onPress={() => {this.onLogin();}}>
                        <Text>ENTRE COM FACEBOOK</Text>
                    </Button>
                </View>

                <View style={{ margin: 20 }}>
                    <Button danger rounded style={{ justifyContent: 'center', alignItems: 'center', width: 385 }} 
                        onPress={() => {this.onLogin();}}>
                        <Text>ENTRE COM FACEBOOK</Text>
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
        flex: 5,
        height: 420,
        width: 420,
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