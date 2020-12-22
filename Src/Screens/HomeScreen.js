import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Component/Card';
import COLORS from '../consts/colors';
import plants from '../consts/plants';

const HomeScreen = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  const categoryList = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategoryIndex(index)}
            activeOpacity={0.8}>
            <Text
              key={index}
              style={[
                styles.categoryStyle,
                categoryIndex == index && styles.categoryTextStyle,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      {/* // Header Component */}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 40, color: COLORS.green, fontWeight: 'bold'}}>
            Plant Shop
          </Text>
        </View>
        <Icon name="shoppingcart" color="black" size={30} />
      </View>
      {/* //Search Bar */}
      <View style={{flexDirection: 'row', marginTop: 40}}>
        {/* search Comp */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightgrey',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="search1" size={30} style={{marginHorizontal: 10}} />
          <TextInput style={{fontSize: 20}} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.green,
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <MaterialCommunityIcons
            name="sort-variant"
            size={30}
            color={COLORS.white}
          />
        </View>
      </View>
      {categoryList()}

      <FlatList
        numColumns={2}
        data={plants}
        keyExtractor={(itemkey) => itemkey.id.toString()}
        renderItem={({item}) => Card({item})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  categoryTextStyle: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,
  },
});
