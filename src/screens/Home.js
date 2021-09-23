import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Layout from '../Layout';
import bobbas from '../sources/Bobbas';

const cardBg = ['#4f81e5', '#6ad6e8'];

export default function Home({navigation}) {
  function goToDetailPage(id = 1) {
    navigation.navigate('Detail', {id: id});
  }

  return (
    <Layout>
      {/* header section */}
      <View style={headerStyles.container}>
        <View>
          <Text style={headerStyles.headerTitle}>Good{'\n'}Morning!</Text>
          <Text style={headerStyles.headerDescription}>
            Enjoy free shipping, enjoy our sweeties
          </Text>
        </View>
        <TouchableOpacity style={headerStyles.iconWrapper}>
          <Icon name="ios-cart" type="ionicon" />
          <Text style={headerStyles.iconBadge}>2</Text>
        </TouchableOpacity>
      </View>
      {/* body section */}
      <View style={bodyStyles.container}>
        <View style={bodyStyles.headerWrapper}>
          <Text style={bodyStyles.headerTitle}>Popular Sweeties</Text>
          <TouchableOpacity>
            <Text style={bodyStyles.headerDescription}>See All</Text>
          </TouchableOpacity>
        </View>
        {bobbas.map((bobba, index) => (
          <TouchableOpacity
            key={index}
            style={[
              cardStyles.container,
              {
                backgroundColor: cardBg[index % 2],
              },
            ]}
            onPress={() => goToDetailPage(1)}>
            <View>
              <Text style={cardStyles.cardDescription}>
                Start From {bobba.price}
              </Text>
              <Text style={cardStyles.cardTitle}>{bobba.title}</Text>
            </View>
            <Image style={cardStyles.cardImage} source={bobba.image} />
            <Image
              style={cardStyles.cardOrnamet}
              source={require('../assets/ornaments/circle.png')}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2f2f31',
  },
  headerDescription: {
    fontSize: 12,
    marginTop: 10,
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

const bodyStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafe',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2f2f31',
  },
  headerDescription: {
    fontSize: 12,
    color: '#b1b3b7',
  },
});

const cardStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
    height: 150,
    borderRadius: 15,
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
  },
  cardImage: {
    position: 'absolute',
    top: -20,
    right: 0,
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  cardOrnamet: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
