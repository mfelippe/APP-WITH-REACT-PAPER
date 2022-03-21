import React, { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { Button,Card, List, Title, Appbar } from "react-native-paper";
import itens from "../constants/comprasList";
import _ from "lodash";



const Compras = () => {

    const cart = () => setShowCart(true);

    const [carrinho,setCarrinho]=useState({});
    const [showCart, setShowCart]=useState(false);

    function addCarrinho(item){
        if(_.has(carrinho, item)) {
            setCarrinho({ ...carrinho, [item]: carrinho[item] + 1 });
            return;
        }
        setCarrinho({ ...carrinho,  [item]: 1 })
    }
    function removeCarrinho(item){
        if(_.has(carrinho, item)) {
            if(carrinho[item] === 1){
                setCarrinho(_.omit(carrinho, item))
                return;
            }
            setCarrinho({ ...carrinho, [item]: carrinho[item] - 1 });
        }
    }
    function getQuantidadeItemsCarrinho() {
        return Object.values(carrinho).reduce((quant1, quant2) => quant1 + quant2, 0);
    }

    return (

        <View>
            <Appbar.Header>
            <Appbar.Content title={"Seu carrinho tem " + getQuantidadeItemsCarrinho() + " itens"}/>
            <Appbar.Action icon="cart" onPress={cart} ></Appbar.Action>
            </Appbar.Header>
            {showCart ? 
                    <ScrollView>
                        <Button onPress={() => setShowCart(false)}> Voltar para lista de compras </Button>
                        {Object.keys(carrinho).map((produto, key) =>
                            <List.Item description={carrinho[produto]} key={key} title={produto}/>)
                        }
                    </ScrollView>
                :
                    <FlatList
                        data={itens}
                        renderItem={({item}) => (
                                <Card>
                                    <Card.Content><Title>{item}</Title></Card.Content>
                                    <Card.Actions  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Button mode="outlined"  onPress={()=>addCarrinho(item)}> Adcionar </Button>
                                        <Button mode="contained" onPress={()=>removeCarrinho(item)}> Remover </Button>
                                    </Card.Actions>
                                </Card>
                            )
                        }
                        keyExtractor={(_, index) => index.toString()}
                    >
                    </FlatList>
            }
            
        </View>
    )
}

export default Compras;