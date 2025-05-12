import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';


const imgFondo = require('./assets/fondo.jpg');
const imgPerfil = require('./assets/fotoPerfil.jpg')

export default function App() {

  return (
   
      <View style={styles.container}>
        <ImageBackground
          source = {imgFondo}
          resizeMode="cover"
          style={styles.background}
        >
          <StatusBar style="light" />
          <SafeAreaView style={{flex:1}}>
            <View style={styles.cardContainer}>
              <Image source={imgPerfil} style={styles.image}/>
              <Text>Matias Halac</Text>
            </View>
           
          </SafeAreaView>
        </ImageBackground>
      </View>
     
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: '100%',
    width: '100%'
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '50%',
    height: 'auto',
    margin: '25%',
    alignItems: 'center'
  },
  image: {
    margin: '10%',
    width: '60%',
    height: '40%',
    
  }
});
