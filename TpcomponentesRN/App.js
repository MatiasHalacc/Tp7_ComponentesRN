import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Pressable} from 'react-native';


const imgFondo = require('./assets/fondo.jpg');
const imgPerfil = require('./assets/fotoPerfil.jpg')

export default function App() {
  return (
   
      <View style={styles.container}>
        <ImageBackground source = {imgFondo} resizeMode="cover" style={styles.background}>
          <StatusBar style="light" />
          <SafeAreaView style={{flex:1}}>
            <View style={styles.cardContainer}>
              <Image source={imgPerfil} style={styles.image}/>
              <Text style={{fontWeight: 'bold', fontSize: 20, fontFamily: 'Georgia'}}>Matias Halac</Text>
              <Text style={{marginTop: '2%'}}>Full Stack Developer</Text>
              <TextInput keyboardType='default' style={styles.Ingreso} placeholder="Nombre"></TextInput>
              <TouchableOpacity onPress={() => Alert.alert("¡Hola!")} style={styles.Touchable}><Text style={{color: 'white', textAlign: 'center'}}>Contactar</Text></TouchableOpacity>
              <Pressable onPress={() => Alert.alert("El perfil esta en contruccion vuelva pronto")} style={styles.Pressable}>
                <Text style={{textAlign: 'center', color: 'white'}}>Ver Perfil</Text>
              </Pressable>
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
    display: 'flex',
    borderRadius: '10%',
    backgroundColor: 'white',
    width: '60%',
    height: '37%',
    margin: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '16px'
  },
  image: {
    flex: 1,
    margin: '10%',
    width: '60%',
    height: '40%',  
  },
  Ingreso: {
    borderRadius: '5%',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '75%',
    height: '10%',
    margin: '2%'
  },
  Touchable: {
    borderRadius: '5%',
    width: '75%',
    backgroundColor: 'black'
  },
  Pressable: {
    borderRadius: '5%',
    marginTop: '2%',
    textAlign: 'center',
    width: '75%',
    backgroundColor: 'blue'
  },
  SafeAreaView:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
