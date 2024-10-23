import { FlatList, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import ProductCardComponent from '../Components/ProductCardComponent';
import { Ionicons } from '@expo/vector-icons';



const localProductList = [
  {
    id: "1A",
    title: "Colorful Furniture",
    price: "100 Rs",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "Comfy Sofa",
    price: "200 Rs",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    title: "Beautiful Furniture",
    price: "300 Rs",
    path: require("../../assets/images/fn1.jpg")
  },

];



export default function ProductList() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("use effect is being called");
    const timer = setTimeout(() => {
      //console.log("Changing the state variable value");
      setLoading(false);
      //console.log("The value of loading is point2", loading);

    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text > Loading...</Text>
        <Ionicons name='reload-circle' size={64}/>
      </View>
    );

  }

  const renderItem = ({ item }) => {
    //console.log("The value of loading is point1", loading);


    return (
      <ProductCardComponent item={item} />
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}


      />
    </SafeAreaView>
  );
}

