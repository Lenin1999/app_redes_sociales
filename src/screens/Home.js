import React from 'react';
import { View, StyleSheet, Image, Text, Linking } from 'react-native';
import { SocialIcon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';






const HomeScreen = () => {
const navigation = useNavigation();

// Función para dividir el array en grupos de tamaño específico
const chunk = (array, size) => {
  return array.reduce((chunks, element, index) => {
    index % size === 0
      ? chunks.push([element])
      : chunks[chunks.length - 1].push(element);
    return chunks;
  }, []);
};

//funcion para navegacion
const apiUnsplash = () => {
  navigation.navigate('Unsplash');
};




  const user = {
    avatar: "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1706570444~exp=1706571044~hmac=f57b139e1d55fa10c070eb8694775d0226886f3a5855bef99861d05597a051fe",
    coverPhoto: "https://static.vecteezy.com/system/resources/previews/009/362/398/non_2x/blue-dynamic-shape-abstract-background-suitable-for-web-and-mobile-app-backgrounds-eps-10-vector.jpg",
    name: "Lenin Ibarra"
  };

  //utilizcion de la libreria de SocialIcons para los botones
  const socialIcons = [
    { type: "twitter", url: "https://x.com/LeninIbarra10?t=R8dFsG6SAERHeVNfSylUzQ&s=08"  },
    { type: "facebook", url: "https://www.facebook.com/lenin.ibarra.7/" },
    { type: "instagram", url: "https://www.instagram.com/leninibarra43/" },
    { type: "linkedin", url: "https://www.linkedin.com/in/lenin-ibarra-639882291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { type: "github", url: "https://github.com/Lenin1999" },
    { type: "twitch", url: "https://www.twitch.tv/emylen1999" },
    { type: "pinterest", url: "https://www.pinterest.es/pokibarra/" },
    { type: "steam", url: "https://steamcommunity.com/profiles/76561199238420119/home" },
  ];

  // Dividir los iconos en grupos de 4
  const socialIconGroups = chunk(socialIcons, 4);

  return (
    <View style={styles.container}>
    
      <Image
        source={{ uri: user.coverPhoto }}
        style={styles.backgroundImage}
      />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.title}>{user.name}</Text>
      </View>

      {/* Botones para las redes sociales */}
      <View style={styles.socialContainer}>
        {socialIconGroups.map((group, index) => (
          <View key={index} style={styles.socialRow}>
            {group.map((icon, iconIndex) => (
              <SocialIcon
                key={iconIndex}
                type={icon.type}
                onPress={() => Linking.openURL(icon.url)}
              />
            ))}
          </View>
        ))}
      </View>

      {/* Botón personalizado para otras acciones */}
      <Button
        title="Api Unsplash"
        onPress={apiUnsplash}
        buttonStyle={styles.customButton}
      />
    </View>
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Agrega posición relativa al contenedor principal
  },
  title: {
    fontSize: 50,
    marginBottom: 80,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'white',
  },
  socialContainer: {
    marginBottom: 60,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customButton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    borderRadius: 30,
    borderColor: '#FFFF',
    borderWidth: 3,
  },
});


export default HomeScreen;