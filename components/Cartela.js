import { StyleSheet } from "react-native";
import { DataTable, List, Text } from "react-native-paper";
import { range } from 'lodash'

export default function Cartela({numbers, selectedNumbers}) {

  const isMiddleOfCartela = (row, column) => (row === 2 && column === 2);
  const isNumberSelected = (number) => (selectedNumbers.includes(number));
  
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={styles.cell}>B</DataTable.Title>
        <DataTable.Title style={styles.cell}>I</DataTable.Title>
        <DataTable.Title style={styles.cell}>N</DataTable.Title>
        <DataTable.Title style={styles.cell}>G</DataTable.Title>
        <DataTable.Title style={styles.cell}>O</DataTable.Title>
      </DataTable.Header>
      {range(5).map((index) => (
        <DataTable.Row key={index}>
          {
            numbers.map((numberArray, i) => (
              <DataTable.Cell key={i} style={styles.cell}>
                {isMiddleOfCartela(i, index) ? 
                  <List.Icon icon="all-inclusive" /> : 
                  <Text style={isNumberSelected(numberArray[index]) && styles.selected}>
                    {numberArray[index]}
                  </Text>
                }
              </DataTable.Cell>
            ))
          }
        </DataTable.Row>
      ))}  
    </DataTable>
  );
}

const styles = StyleSheet.create({
  cell: {justifyContent: "center"},
  selected: {
    color: 'blueviolet',
    textDecorationLine: "line-through"
  }
});