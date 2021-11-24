import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionIcon from '../assets/icons/transaction2.svg';

const CardTransaction = props => {
  return (
    <View style={styles.container}>
      <TransactionIcon width={25} height={25} />
      <View>
        <Text style={styles.text}>Rp. 20.000</Text>
        <Text style={styles.text}>Transfer to 08xxxxxxxx</Text>
      </View>
      <Text style={styles.text}>24/11/2021</Text>
    </View>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevetion: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
  },
});
