/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { useSelector } from 'react-redux';

import { Icon } from '@components/icon';
import { Screen } from '@components/screen';
import { navigateScreen } from '@navigation/navigation-service';
import { APP_SCREEN, MODAL_SCREEN } from '@navigation/screen-types';
import { selectListCategory } from '@redux-selector/app';
import { Text } from '@rn-core';

import useAddListCategory from './useAddListCategory';

export type Props = {};

const Home: React.FC<Props> = ({}) => {
  const { theme } = useStyles();

  const insets = useSafeAreaInsets();

  const { width } = useWindowDimensions();

  // const [isShowModal, setIsShowModal] = useState(false);

  const listCategory = useSelector(selectListCategory);

  const { removeCateGategory } = useAddListCategory();

  const [dataTab] = useState({
    today: {
      icon: '',
      label: 'Hôm nay',
      count: 0,
    },
    estimateTime: {
      icon: '',
      label: 'Lịch dự kiến',
      count: 0,
    },
    all: {
      icon: '',
      label: 'Hôm nay',
      count: 0,
    },
    done: {
      icon: '',
      label: 'Đã hoàn tất',
      count: 0,
    },
  });

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: (width - 30 - 10) / 2,
          backgroundColor: theme.color.white,
          borderRadius: 6,
          padding: 10,
          marginRight: 10,
          marginBottom: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon icon="icTask" />
          <Text style={{ textAlign: 'right', flex: 1, fontWeight: 'bold' }}>
            {item.count}
          </Text>
        </View>
        <Text style={{ marginTop: 5 }}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemListCategory = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigateScreen(APP_SCREEN.TODOLIST, {
            idTodo: index,
            idCategory: item.id,
            title: item.label,
          })
        }
        style={{
          backgroundColor: theme.color.white,
          padding: 15,
          borderRadius: 6,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon icon="icTask" colors={item.color} />
          <Text style={{ flex: 1, marginLeft: 10 }}>{item.label}</Text>
          <Text>{item.data.length}</Text>
          <Icon icon={'icArrowRight'} colorTheme="grayText" />
        </View>
      </TouchableOpacity>
    );
  };

  const extractItemKey = item => {
    return item.id.toString();
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
      <FlatList
        data={[]}
        numColumns={2}
        renderItem={renderItem}
        ListFooterComponent={() => (
          <>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10, flex: 1 }}>
                Danh sách của tôi
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigateScreen(MODAL_SCREEN.MODALADDCATEGORY);
                }}>
                <Icon icon="icPlus" size={18} />
              </TouchableOpacity>
            </View>
            <FlatList
              keyExtractor={extractItemKey}
              data={listCategory}
              renderItem={renderItemListCategory}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
          </>
        )}
      />
    </Screen>
  );
};

export default Home;
