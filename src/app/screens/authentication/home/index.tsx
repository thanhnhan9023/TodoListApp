import React, { memo } from 'react';

import isEqual from 'react-fast-compare';
import { useSelector } from 'react-redux';

import { Text, View } from '@rn-core';

const HomeComponent = () => {
  // render
  const app: any = useSelector(state => state?.app);

  console.log('value app', app);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export const Home = memo(HomeComponent, isEqual);
