import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Alert, Button, Card, Title} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";



export default function CriarPerguntas () {
var op1 = "";
var op2 = "";
var op3 = "";
var op4 = "";
var op5 = "";

const [pergunta,setPergunta]=useState()

function handleButton(){

    setPergunta([
      {
        question: op1,
        answer: [
          {
            answerText: op2,
            isCorrect: true
          },
          {
            answerText: op3,
            isCorrect: false
          },
          {
            answerText: op4,
            isCorrect: false
          },
          {
            answerText: op5,
            isCorrect: false
          }
        ]
      }])

    

      return(alert("Uma nova pergunta foi adcionada"))
}

  return (
      
    <SafeAreaView>
        <>
        <Card>
          <Title> Digite a Pergunta </Title>
          <TextInput label="Digite aqui a pergunta" name="question" onChangeText={(e)=>op1 = e}></TextInput>
          <Title>Digite as Alternativas</Title>
      
          <TextInput label='Alternativa Verdadeira' name="answerText"  onChangeText={(e)=>op2 = e}></TextInput>

          <TextInput label='Alternativa Falsa' name="answerText" onChangeText={(e)=>op3 = e}></TextInput>

          <TextInput label='Alternativa Falsa' name="answerText" onChangeText={(e)=>op4 = e}></TextInput>

          <TextInput label='Alternativa Falsa' name="answerText" onChangeText={(e)=>op5 = e}></TextInput>

          <Button mode="contained" onPress={ () => handleButton() }>Submit </Button>
          
          
        </Card>
       
        </>
    </SafeAreaView>

      
        
  );
}
