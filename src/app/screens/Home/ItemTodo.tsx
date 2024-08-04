import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useStyles } from 'react-native-unistyles';

import { Icon } from '@components/icon';
import { RadioButton } from '@components/radio-button';

const ItemTodo = ({ item, onDelete = () => {}, onEdit = () => {} }) => {
  const { theme } = useStyles();

  return (
    <TouchableOpacity
      onPress={onEdit}
      style={{
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 8,
      }}>
      <RadioButton />
      <View style={{ marginLeft: 15, flex: 1 }}>
        <Text>{item.label}</Text>
        <Text style={{ color: 'gray' }}>Note: {item.note}</Text>
      </View>
      <TouchableOpacity
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10,
        }}
        onPress={onDelete}>
        <Icon icon="icRemove" colorTheme={'primaryMain'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ItemTodo;
