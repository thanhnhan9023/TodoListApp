import React, { useEffect, useRef } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import { goBack } from '@navigation/navigation-service';

const ModalCustom = ({
  styleContainer = null,
  styleContainerCus = {},
  styleViewModal = {},
  isInput = false,
  behavior,
  keyboardVerticalOffset,
  ...props
}) => {
  const opacity = useRef(new Animated.Value(0));

  const _startAnimation = () => {
    setTimeout(() => {
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }, 150);
  };

  const _endAnimation = () => {
    goBack();

    setTimeout(() => {
      Animated.timing(opacity.current, {
        toValue: 0,
        duration: 1,
        useNativeDriver: true,
      }).start();
    }, 1);
  };

  useEffect(() => {
    _startAnimation();
  }, []);

  const WrapperComponent = !isInput ? View : KeyboardAvoidingView;

  return (
    <WrapperComponent
      style={styleContainer || { ...styles.container, ...styleContainerCus }}
      behavior={behavior || Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset || Platform.OS ? 0 : 0}>
      <Animated.View
        onTouchEnd={_endAnimation}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.16)',
          opacity: opacity.current,
        }}
      />
      {props.children}
    </WrapperComponent>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
