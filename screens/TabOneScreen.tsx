import { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const onPress = useCallback(() => {
    navigation.navigate('Hello');
  }, [navigation]);
  const onPress2 = useCallback(() => {
    navigation.navigate('Animated');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Go To Hello</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable onPress={onPress2} style={styles.button}>
        <Text style={styles.buttonText}>Go To Animated</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#428bca',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
