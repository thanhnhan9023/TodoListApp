import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@components/screen';

export type Props = {};

const Calendar: React.FC<Props> = ({}) => (
  <Screen
    bottomInsetColor="transparent"
    scroll
    excludeEdges={['bottom']}
    statusBarStyle="dark-content"
    style={{ paddingVertical: 0, paddingHorizontal: 10 }}
    backgroundColor={'transparent'}>
    <Text>Calendar</Text>
  </Screen>
);

export default Calendar;
