import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.foto}
        source={require('../assets/PerfilProjeto.jpeg')}
      />

      <Text style={styles.nome}>Sammuel Alves</Text>

      <Text style={styles.status}>Online</Text>

     <Button
        title="Enviar mensagem"
        onPress={() => alert('Este é o perfil do Sammuel.')}
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

