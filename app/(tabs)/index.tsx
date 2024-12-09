import { StyleSheet, Text, View } from 'react-native';

// DO YOUR ASSIGNMENT IN THIS FILE

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text>MY TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
