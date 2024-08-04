import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { useSelector } from 'react-redux';

import { Icon } from '@components/icon';
import { LocalImage } from '@components/local-image';
import { Screen } from '@components/screen';
import { goBack, navigateScreen } from '@navigation/navigation-service';
import { MODAL_SCREEN } from '@navigation/screen-types';
import { selectListCategory } from '@redux-selector/app';

import ItemTodo from './ItemTodo';
import useAddListCategory from './useAddListCategory';
import useAddTolist from './useAddTolist';

const TodoList = props => {
  const { theme } = useStyles();

  const { idTodo, idCategory } = props.route.params;

  // console.log("idCategory",idCategory)
  const { removeCateGategory } = useAddListCategory();

  const dataTodo = useSelector(selectListCategory);

  const insets = useSafeAreaInsets();

  const { hanlderRemoveTodo, hanlderEditTodo, title } = useAddTolist();

  const renderItem = ({ item, index }: any) => {
    return (
      <ItemTodo
        onEdit={() => hanlderEditTodo(item, index)}
        item={item}
        onDelete={() => hanlderRemoveTodo(idTodo, item.idTodo)}
      />
    );
  };

  const hanlderAddTodo = () => {
    navigateScreen(MODAL_SCREEN.MODALADDTODO, {
      idTodo,
    });
  };

  return (
    <Screen
      statusColor="white"
      bottomInsetColor="transparent"
      scroll={false}
      unsafe
      excludeEdges={['left']}
      statusBarStyle="dark-content"
      style={{ paddingTop: insets.top, paddingHorizontal: 15 }}
      backgroundColor={theme.color.grayBackGround}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={goBack}>
            <LocalImage
              source="icArrowLeft"
              resizeMode="contain"
              style={{
                tintColor: theme.color.primaryMain,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Icon icon="icEdit" size={22} colorTheme="primaryMain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeCateGategory(idCategory)}>
            <Icon icon="icTrash" size={18} colorTheme="primaryMain" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: 20 }}
        data={dataTodo[idTodo].data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
      <TouchableOpacity
        hitSlop={{
          bottom: 10,
          top: 20,
          left: 20,
          right: 20,
        }}
        activeOpacity={0.5}
        style={{ padding: 10 }}
        onPress={hanlderAddTodo}>
        <LocalImage
          source="icAddToTask"
          resizeMode="contain"
          style={{
            position: 'absolute',
            bottom: 40,
            right: 10,
            height: 45,
            width: 45,
          }}
        />
      </TouchableOpacity>
    </Screen>
  );
};

export default TodoList;
