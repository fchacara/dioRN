import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/101803543?v=4'
const urlToMyGithub = 'https://github.com/fchacara';

const App = () => {

    const handlePressGoToGithub = async() => {
        console.log('Verificando link');
       const res = await Linking.canOpenURL(urlToMyGithub);
       if(res){
           console.log('Link aprovado');
           console.log('Abrindo o link......');
          await Linking.openURL(urlToMyGithub);
       }
    };
    return ( 
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="dark-content"/>
                <View style={style.content}>
                    <Image accessibilityLabel='Filipe em uma varanda panoramica' 
                    style={style.avatar} 
                    source={{uri:imageProfileGithub}} />
                <Text accessibilityLabel='Nome: filipe chacara' 
                style={[style.defaultText, style.name]}>Filipe Chácara</Text>
                <Text accessibilityLabel='NickName: f chacara' 
                style={[style.defaultText, style.nickname]}>fchacara</Text>
                <Text accessibilityLabel='descrevendo filipe: Desenvolvedor de Software' 
                style={[style.defaultText, style.desc]}>Desenvolvedor de Software</Text>
                </View>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex:1, //expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize:18,
        fontWeight: 'normal',
    },
    desc: {
        fontSize: 16,
        fontWeight: '300',
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 60,
        padding: 20,
        
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: 'white',
    },
 
});