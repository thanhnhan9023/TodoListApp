/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { useStyles } from 'react-native-unistyles';

import { sizeScale } from '@common/scale';
import FontSize, { reText } from '@common/scale/size';
import { LocalImage } from '@components/local-image';
import { Screen } from '@components/screen';
import { goBack } from '@navigation/navigation-service';

import useAddListCategory from './useAddListCategory';

const ModalAddCategory: React.FC<Props> = ({}) => {
  const { width } = useWindowDimensions();

  const { theme } = useStyles();

  const {
    titleCategory,
    handleAddCategory,
    clearListCategory,
    dataColoterSelect,
    onChangeText,
    colorSelct,
    selectColorCategory,
  } = useAddListCategory();

  return (
    <Screen
      statusColor="white"
      bottomInsetColor="transparent"
      scroll={false}
      unsafe
      excludeEdges={['left']}
      statusBarStyle="dark-content"
      style={{ padding: sizeScale(15) }}
      backgroundColor={theme.color.grayBackGround}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={clearListCategory}>
          <Text>Hủy</Text>
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
          Danh sách mới
        </Text>
        <TouchableOpacity onPress={handleAddCategory}>
          <Text>Xong</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          padding: 10,
          backgroundColor: theme.color.white,
          borderRadius: 8,
        }}>
        <LocalImage
          source="imgTodoTask"
          resizeMode="contain"
          style={{
            height: FontSize.verticalScale(80),
            width: FontSize.scale(80),
            tintColor: colorSelct,
          }}
        />
        <TextInput
          value={titleCategory}
          onChangeText={onChangeText}
          autoFocus
          textAlign="center"
          style={{
            marginTop: 10,
            borderRadius: 8,
            width: '100%',
            height: 45,
            fontSize: reText(16),
            backgroundColor: theme.color.grayBackGround,
          }}
          placeholder="Tên danh sách"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginTop: 10,
          padding: 10,
          borderRadius: 8,
          backgroundColor: theme.color.white,
          justifyContent: 'space-between',
        }}>
        {dataColoterSelect.map((item, index) => {
          const widthItem = (width - 40 - 48) / 8;

          return (
            <View
              key={index}
              style={{
                height: widthItem,
                width: widthItem,
                marginRight: 8,
                padding: 3,
                borderRadius: widthItem,
                borderWidth: colorSelct === item ? 1 : 0,
                borderColor: 'gray',
              }}>
              <TouchableOpacity
                onPress={() => selectColorCategory(item)}
                activeOpacity={0.8}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: widthItem,
                  backgroundColor: item,
                }}
              />
            </View>
          );
        })}
      </View>
    </Screen>
  );
};

export default ModalAddCategory;
