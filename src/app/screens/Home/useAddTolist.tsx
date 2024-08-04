import { useRef, useState } from 'react';

import { dispatch } from '@common/redux';
import { goBack, navigateScreen } from '@navigation/navigation-service';
import { MODAL_SCREEN } from '@navigation/screen-types';
import { useRoute } from '@react-navigation/native';
import { todoActions } from '@redux-slice';

const useAddTolist = () => {
  const route = useRoute();

  const {
    idTodo,
    title,
    nameTodo: nameTodoList,
    noteTodo: noteTodoList,
    isEdit,
    indexUpdate,
  } = route.params;

  console.log('idTodo ------', indexUpdate);

  const refNameTodo = useRef();

  const [nameTodo, setNameTodo] = useState<string>(nameTodoList || '');

  const [noteTodo, setNoteTodo] = useState<string>(noteTodoList || '');

  const onchangeNameTodo = (text: string) => {
    setNameTodo(text);
  };

  const onchangeNoteTodo = (text: string) => {
    setNoteTodo(text);
  };

  const hanlderRemoveTodo = (id: number, idRemove: number) => {
    dispatch(
      todoActions.removeItemTodo({
        id,
        idRemove: idRemove,
      }),
    );
  };

  const hanlderEditTodo = (item: any, indexUpdate: number) => {
    navigateScreen(MODAL_SCREEN.MODALADDTODO, {
      idTodo,
      nameTodo: item.label,
      noteTodo: item.note || '',
      indexUpdate,
      isEdit: true,
    });
  };

  const hanlderSaveEdit = () => {
    const item = {
      label: nameTodo,
      note: noteTodo,
    };

    dispatch(
      todoActions.updateItemTodo({
        id: idTodo,
        indexUpdate,
        itemTodo: item,
      }),
    );

    goBack();
  };

  const hanlderAddTodo = () => {
    const item = {
      idTodo: +new Date(),
      label: nameTodo,
      note: noteTodo,
    };

    console.log('index', idTodo);

    dispatch(
      todoActions.addItemTodo({
        id: idTodo,
        itemTodo: item,
      }),
    );

    nameTodo && setNameTodo('');

    noteTodo && setNoteTodo('');

    refNameTodo.current.focus();
  };

  return {
    hanlderAddTodo,
    onchangeNameTodo,
    nameTodo,
    noteTodo,
    hanlderRemoveTodo,
    onchangeNoteTodo,
    hanlderEditTodo,
    isEdit,
    hanlderSaveEdit,
    refNameTodo,
    title,
  };
};

export default useAddTolist;
