import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import {Icon} from 'react-native-elements';

export default function Detail({route, navigation}) {
  const {_, title, description, price, image} = route.params;

  function goToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={backgroundStyles.wrapper}>
        <View style={backgroundStyles.content} />
      </View>

      <ScrollView style={contentStyles.container}>
        {/* header */}
        <View style={headerStyles.container}>
          <TouchableOpacity onPress={() => goToHomePage()}>
            <View style={headerStyles.backWrapper}>
              <Icon name="chevron-back-outline" type="ionicon" />
              <Text style={headerStyles.backText}>Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyles.iconWrapper}>
            <Icon name="ios-cart" type="ionicon" />
            <Text style={headerStyles.iconBadge}>2</Text>
          </TouchableOpacity>
        </View>
        {/* image */}
        <View style={contentStyles.imageWrapper}>
          <Image style={contentStyles.contentImage} source={image} />
        </View>
        {/* content */}
        <View style={contentStyles.contentWrapper}>
          <Text style={contentStyles.contentTitle}>{title}</Text>
          <Text style={contentStyles.contentDescription}>{description}</Text>
          <Text style={contentStyles.contentLabel}>Select Quantity</Text>

          <ScrollView horizontal={true} style={contentStyles.quantityWrapper}>
            {[1, 2, 3, 4, 5].map(index => (
              <TouchableOpacity key={index} style={contentStyles.quantityItem}>
                <Text style={contentStyles.quantityText}>{index}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* cart button */}
          <View style={buttonStyles.container}>
            <View style={buttonStyles.price}>
              <Text style={buttonStyles.priceText}>{price}</Text>
            </View>
            <TouchableOpacity style={buttonStyles.buttonWrapper}>
              <View style={buttonStyles.button}>
                <Text style={buttonStyles.cartText}>Add To Cart</Text>
                <Icon
                  name="chevron-forward-outline"
                  type="ionicon"
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
});

const backgroundStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#4f81e5',
    height: 500,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

const contentStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  contentImage: {
    width: 150,
    height: 250,
  },
  contentWrapper: {
    marginTop: 40,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentDescription: {
    marginTop: 15,
  },
  contentLabel: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityWrapper: {marginTop: 15},
  quantityItem: {
    borderColor: '#333',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: 'center',
    marginRight: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backWrapper: {
    flexDirection: 'row',
  },
  backText: {
    marginLeft: 10,
    fontSize: 16,
  },
  iconWrapper: {
    position: 'relative',
  },
  iconBadge: {
    width: 15,
    height: 15,
    fontSize: 10,
    backgroundColor: '#5583db',
    color: '#ffffff',
    borderRadius: 8,
    flex: 1,
    top: -5,
    right: -5,
    position: 'absolute',
    textAlign: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#4d7fe2',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1,
  },
  priceText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonWrapper: {
    backgroundColor: '#3d72de',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex: 2,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cartText: {
    textAlign: 'right',
    color: '#fff',
    fontWeight: 'bold',
  },
});
