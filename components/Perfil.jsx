import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.foto}
        source={require('../assets/PerfilAranha.jpg')}
      />

      <Text style={styles.nome}>Homem Aranha</Text>

      <Text style={styles.status}>Online</Text>

     <Button
        title="Enviar mensagem"
        onPress={() => alert('Este é o perfil do Homem Aranha.')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 300,
    height: 300,
  },
  nome: {
    fontSize: 24,
  },
  status: {
    fontSize: 18,
  },
});

