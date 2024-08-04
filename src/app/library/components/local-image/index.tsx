import React from 'react';
import { Image, ImageStyle } from 'react-native';

import { images } from '@assets/image';
import { View } from '@rn-core';

import { styles } from './styles';
import { LocalImageProps } from './type';

export const LocalImage = ({
  source,
  containerStyle,
  style: styleOverride,
  resizeMode = 'cover',
}: LocalImageProps) => {
  // render
  return (
    <View style={containerStyle}>
      <Image
        style={(styleOverride as ImageStyle) || styles.img}
        resizeMode={resizeMode}
        source={images[source ?? 'default']}
      />
    </View>
  );
};
