import { List, Title } from "react-native-paper";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Games App</Title>
      <View style={styles.list}>
        <TouchableOpacity onPress={() => navigation.push('Bingo')}>
          <Text>
            <List.Item
              style={styles.listItem}
              title="Bingo"
              left={props => <List.Icon style={styles.listItem} {...props} icon="blur" />}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Carrinho de Compras')}>
          <Text>
            <List.Item
              style={styles.listItem}
              title="Simulador de compra"
              left={props => <List.Icon {...props} icon="cart-outline" />}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Perguntas e Respostas')}>
          <Text>
            <List.Item
              style={styles.listItem}
              
              title="Perguntas e respostas"
              left={props => <List.Icon {...props} icon="forum" />}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  title: {
    marginTop: 80,
    fontSize: 30
  },
  list: {
    marginBottom: '56%'
  },
  listItem: {
    fontSize: 100
  }
})