/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useStyles } from 'react-native-unistyles';

import { LocalImage } from '@components/local-image';
import ModalCustom from '@components/modalCus/ModalCustom';

import useAddTolist from './useAddTolist';

const ModalAddToto: React.FC<Props> = props => {
  const {
    hanlderAddTodo,
    nameTodo,
    noteTodo,
    onchangeNameTodo,
    onchangeNoteTodo,
    hanlderSaveEdit,
    isEdit,
    refNameTodo,
  } = useAddTolist(props);

  console.log('value isEdit', isEdit);

  const { theme } = useStyles();

  return (
    <ModalCustom isInput styleContainer={styles.modal}>
      <View
        style={{
          padding: 20,
          backgroundColor: theme.color.white,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingHorizontal: 10,
        }}>
        {isEdit && (
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sửa</Text>
        )}
        <TextInput
          ref={refNameTodo}
          onChangeText={onchangeNameTodo}
          value={nameTodo}
          autoFocus
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 10,
            borderColor: theme.color.grayBackGround,
          }}
          placeholder="Lời nhắc mới"
        />
        <TextInput
          value={noteTodo}
          onChangeText={onchangeNoteTodo}
          multiline
          style={{
            marginTop: 5,
            width: '100%',
            padding: 10,
            borderColor: theme.color.grayBackGround,
          }}
          placeholder="Ghi chú"
        />
        <TouchableOpacity
          onPress={!isEdit ? hanlderAddTodo : hanlderSaveEdit}
          style={{ alignSelf: 'flex-end', marginRight: 10 }}>
          <LocalImage
            source="icArrowUp"
            resizeMode="contain"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </ModalCustom>
  );
};

export default ModalAddToto;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
