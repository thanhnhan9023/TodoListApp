import { useState } from 'react';

import { dispatch } from '@common/redux';
import { goBack } from '@navigation/navigation-service';
import { todoActions } from '@redux-slice';

const useAddListCategory = () => {
  const [titleCategory, setTitleCategory] = useState<string>('');

  const [dataColoterSelect] = useState([
    '#5bc413',
    '#406158',
    '#31c5eb',
    '#390e6f',
    '#a8729f',
    '#6c6d9c',
  ]);

  const [colorSelct, setColorSelct] = useState<string>(dataColoterSelect[0]);

  const handleAddCategory = (): void => {
    if (titleCategory.length <= 0) {
      alert('Bạn chưa nhập tên danh sách');

      return;
    }

    dispatch(
      todoActions.addItem({
        label: titleCategory,
        id: +new Date(),
        data: [],
        color: colorSelct,
      }),
    );

    goBack();
  };

  const clearListCategory = (): void => {
    // dispatch(todoActions.clearItem());

    goBack();
  };

  const removeCateGategory = (idCategory: number): void => {
    goBack();

    dispatch(todoActions.removeItem({ id: idCategory }));
  };

  const onChangeText = (text: string) => {
    setTitleCategory(text);
  };

  const selectColorCategory = (colors: string) => {
    setColorSelct(colors);
  };

  return {
    colorSelct,
    selectColorCategory,
    titleCategory,
    removeCateGategory,
    clearListCategory,
    dataColoterSelect,
    onChangeText,
    handleAddCategory,
  };
};

export default useAddListCategory;
