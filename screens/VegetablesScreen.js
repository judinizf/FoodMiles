import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Input, Item, Button, Right, Thumbnail, Body, ListItem, StyleProvider, Container, Header, Content, Card, CardItem, Icon, Left} from 'native-base';
import axios from 'axios';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class VegetablesScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    onLogin = () => {

        console.log("email: " + String(this.state.email) + " password: " + String(this.state.password));

        axios.post('https://food-miles.herokuapp.com/login', {
            login: this.state.login, 
            senha: this.state.senha,
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

                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Carousel' })
                            ],
                        }))
                    }}>
                    <Image source={{ uri:'https://i.imgur.com/zEmJJct.png',}} style={styles.v8}/>
                </TouchableWithoutFeedback>

                <Header transparent searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Buscar produtos e lojinhas</Text>
                    </Button>
                </Header>

                <ScrollView vertical>
                    <View>
                        <Card style={styles.v6}>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Thumbnail source={{uri: 'https://img.icons8.com/bubbles/100/000000/audrey-hepburn.png'}} />
                                    <Body>
                                        <Text>Nome da Lojinha</Text>
                                        <Text note>Descrição</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={styles.v7}>
                                <Image source={{uri: 'https://www.embrapa.br/image/journal/article?img_id=35185802&t=1529407524819'}} style={{height: 260, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>    

                    <View>
                        <Card style={styles.v6}>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Thumbnail source={{uri: 'https://img.icons8.com/bubbles/100/000000/audrey-hepburn.png'}} />
                                    <Body>
                                        <Text>Nome da Lojinha</Text>
                                        <Text note>Descrição</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={styles.v7}>
                                <Image source={{uri: 'https://www.agromogiana.com.br/wp-content/uploads/2019/03/Cenoura-750x460.jpg'}} style={{height: 260, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View> 

                    <View>
                        <Card style={styles.v6}>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Thumbnail source={{uri: 'https://img.icons8.com/bubbles/100/000000/audrey-hepburn.png'}} />
                                    <Body>
                                        <Text>Nome da Lojinha</Text>
                                        <Text note>Descrição</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody style={styles.v7}>
                                <Image source={{uri: 'https://souagro.com.br/wp-content/uploads/2018/01/beterraba_beneficios_374278960.jpg'}} style={{height: 260, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={styles.v7}>
                                <Left>
                                    <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>                     
                    
                </ScrollView>

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
        height: 80,
        width: 80,
        backgroundColor: '#F4F7ED',
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
    },
    v6: {
        height: 419,
        width: 419,
        backgroundColor: '#7FA99B',
        borderRadius: 30,
    },
    v7: {
        borderRadius: 30,
        backgroundColor: '#7FA99B',
    },
    v8:{
        height: 80,
        width: 419,
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      },
});