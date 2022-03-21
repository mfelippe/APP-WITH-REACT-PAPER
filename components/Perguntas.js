import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Button,Card, List, Paragraph, Title} from "react-native-paper";
import lista_perguntas from "../constants/lista_perguntas";


const Perguntas = () => {

  const [score, setScore]=useState(0);
  const [showScore,setShow]=useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({question: '', answer: []});
  const [tentativas, setTentativas]=useState(0)
  const [perguntasRestantes, setPerguntasRestantes] = useState(lista_perguntas)

  function handleAnswer(isCorrect){
    if (isCorrect){
      setScore(score + 1);
    }
    novaPergunta();
    setTentativas(tentativas + 1);

    if(tentativas + 1 >= lista_perguntas.length){
      setShow(true)
    }
  }

  function novaPergunta() {
    const perguntaEscolhida = _.sample(perguntasRestantes);
    setPerguntasRestantes(perguntasRestantes.filter((pergunta) => pergunta !== perguntaEscolhida));
    setCurrentQuestion(perguntaEscolhida);
  }

  function reiniciar(){
    setScore(0);
    setShow(false);
    setTentativas(0);
    const perguntaEscolhida = _.sample(lista_perguntas);
    setPerguntasRestantes(lista_perguntas.filter((pergunta) => pergunta !== perguntaEscolhida));
    setCurrentQuestion(perguntaEscolhida);
  }

  useEffect(() => {
    novaPergunta();
  }, []);

  return (
    <View>
      {showScore ?   
        (
          <Card>
            <Card.Content>
              <Title>- Pontuação -</Title>
              <Paragraph> Você acertou {score} / {tentativas}</Paragraph>
              <Button mode="contained" onPress={() => reiniciar()}>Jogar Novamente </Button>
            </Card.Content>
          </Card>
        )

      : // Executa enquanto showScore é falso
        (
          <Card>
            <Card.Title title={"Questão " + (tentativas+1)+"/"+(lista_perguntas.length) }/>
            
            <Card.Content>
              <Title> {currentQuestion.question}</Title>
              {currentQuestion.answer.map((options, index) =>(
                <Button 
                  key={index} 
                  mode='outlined' 
                  onPress={() => handleAnswer(options.isCorrect)}
                >
                  {options.answerText}
                </Button>
              ))}
            </Card.Content>
          </Card>
        )
      }
    </View> 
  )
}

export default Perguntas;

