import { StyleSheet, Text, View , Share , TouchableOpacity } from 'react-native'
import React from 'react';



  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  




const ProductDetail = ({ navigation , route }) => {
  const detailss = route.params.prodId;
  return (
    <View>
      <Text style ={styles.para}>Hello { detailss }</Text>
      <TouchableOpacity
      style={{padding: 12 , width: "80%" , alignItems:"center"}}
      onPress={() => onShare()  }
      
      >
        <Text style={{ fontSize: 28,
                padding: 12,
                backgroundColor: `#5f9ea0`,
                marginBottom:8,
                }}>Share</Text>

      </TouchableOpacity>
    </View>
  )
};

export default ProductDetail

const styles = StyleSheet.create({

  para:{
    
    fontSize:20,
  }
});