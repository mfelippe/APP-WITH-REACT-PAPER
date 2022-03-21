import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { FAB, Portal } from "react-native-paper";
import Cartela from "../components/Cartela";
import generateArray from "../utils/generateArray";
import generateNumber from "../utils/generateNumber";

export default function Bingo() {
  const [estadoJogo, setEstadoJogo] = useState('jogando')
  const [cartelas, setCartelas] = useState([generateCartelaNumbers()]);
  const [selectedNumbers, setSelectedNumbers] = useState([0]);//0 é o valor no meio da tabela, que já vem preenchido
  const [fabOpen, setFabOpen] = useState(false);

  const novaCartela = () => {
    setCartelas([...cartelas, generateCartelaNumbers()])
  }

  const sortearNumero = () => {
    let number;
    do {
      number = generateNumber(1, 75);
    } while (selectedNumbers.includes(number));
    const newNumbers = [...selectedNumbers, number];
    setSelectedNumbers(newNumbers);
    verificarGanhadores(newNumbers);
  }

  const reiniciarSorteio = () => {
    setSelectedNumbers([0]);
    setEstadoJogo('jogando');
  }

  const reiniciarJogo = () => {
    reiniciarSorteio();
    setCartelas([generateCartelaNumbers()]);
  }

  const verificarGanhadores = (numerosSelecionados) => {
    const cartelasComoVetor = cartelas.map(
      (cartela) => cartela.reduce((coluna1, coluna2) => [...coluna1,...coluna2])
    );

    const ganhadores = [];
    cartelasComoVetor.forEach((cartela, index) => {
      if(!cartela.some((numero) => !numerosSelecionados.includes(numero))) {
        ganhadores.push(index + 1);
      }
    });
    
    if(ganhadores.length > 0) {
      setEstadoJogo('finalizado');
      if (ganhadores.length === 1) {
        alert(`A cartela ganhadora foi ${ganhadores[0]}`);
      }
      else {
        alert('As cartelas ganhadoras foram ' + ganhadores.join(', '));
      }
    }
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {cartelas.map((cartela, i) => (
          <View key={i} style={styles.cartelaWrapper}>
            <Cartela numbers={cartela} selectedNumbers={selectedNumbers}></Cartela>
          </View>
        ))}
      </ScrollView>
      <FAB
        style={estadoJogo === 'finalizado' ? [styles.fab, styles.disabled] : styles.fab}
        small
        icon="dice-multiple-outline"
        onPress={sortearNumero}
        color="white"
        disabled={estadoJogo === 'finalizado'}
      />
      <Portal>
        <FAB.Group
          open={fabOpen}
          icon='pencil-outline'
          actions={[
            { icon: 'reload-alert', onPress: reiniciarJogo, label: 'Reiniciar jogo', style: styles.zerarJogo},
            { icon: 'reload', onPress: reiniciarSorteio, label: 'Reiniciar sorteio', style: styles.zerarSorteio},
            { icon: 'plus', onPress: novaCartela, label: 'Adicionar cartela', small: false}
          ]}
          color='white'
          onStateChange={({open}) => setFabOpen(open)}
          fabStyle={styles.group}
        />
      </Portal>
    </>
  );
}

const generateCartelaNumbers = () => {
  const meio = generateArray(5, 31, 45);
  meio[2] = 0;
  return [
    generateArray(5, 1, 15),
    generateArray(5, 16, 30),
    meio,
    generateArray(5, 46, 60),
    generateArray(5, 61, 75),
  ];
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 10,
    left: 10,
    backgroundColor: 'blueviolet'
  },
  group: {
    backgroundColor: 'gray'
  },
  cartelaWrapper: {
    marginBottom: 30
  },
  zerarJogo: {
    backgroundColor: 'firebrick'
  },
  zerarSorteio: {
    backgroundColor: 'gold'
  },
  disabled: {
    opacity: 0.7
  }
})