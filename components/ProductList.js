import * as React from 'react';
import { Button , View, Text ,FlatList , Platform , StyleSheet ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Component } from 'react';
import ProductDetail from './ProductDetail';

export default class ProductList extends Component {
    
    constructor(){
        super();
        this.state={
            data :[
                {
                    name:'Brown eggs',
                    details : 'Raw organic brown eggs in a basket',
                },
                {
                    name:'Sweet fresh stawberry',
                    details : 'Sweet fresh stawberry on the wooden table',
                },
                {
                    name:'Asparagus',
                    details : 'Asparagus with ham on the wooden table',
                },
                {
                    name:'Green smoothie',
                    details : 'Glass of green smoothie with quail egg',
                },
                {
                    name:'Pesto with basil',
                    details : 'Italian traditional pesto with basil, chesse and oil',
                }
            ]

        }
        for (var i = this.state.data.length - 1; i > 0; i--) {
   
         
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = this.state.data[i];
            this.state.data[i] = this.state.data[j];
            this.state.data[j] = temp;
        }
    }
   
    render(){
        return (
            <View>
            <FlatList
            data={this.state.data}
            renderItem={({item}) =>
            <TouchableOpacity 
            onPress={() =>
                this.props.navigation.navigate('detail',{
                    prodId: item.details,
                })
            }
        >
            <View>
            <Text style ={styles.textStyle}>{item.name}</Text>
            </View>
           
            </TouchableOpacity>
            }
            />
        </View>
 
 
           )   
        };


    };

        const styles = StyleSheet.create({
            textStyle:{
                fontSize: 28,
                padding: 12,
                backgroundColor: `#5f9ea0`,
                marginBottom:8,
                

            },
            textStylehead:{
                fontSize: 40,
                padding: 12,
                marginTop:12,
            }
            
        });
  

