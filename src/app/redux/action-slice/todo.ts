import { SLICE_NAME } from '@common/constant';
import { TodoState } from '@model/to';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoPayload {
  label?: string;
  data?: any;
  id?: number;
  idRemove?: number;
  indexUpdate?: number;
  color?: string;
  itemTodo?: any;
}

const initialAppState: TodoState = {
  listCategory: [],
};

const todoSlice = createSlice({
  name: SLICE_NAME.TODO,
  initialState: initialAppState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<TodoPayload>) => {
      state.listCategory = [...state.listCategory, payload];
    },
    removeItem: (state, { payload }: PayloadAction<TodoPayload>) => {
      state.listCategory = state.listCategory.filter(
        (item: TodoPayload) => item.id !== payload.id,
      );
    },
    clearItem: state => {
      state.listCategory = [];
    },
    removeItemTodo: (state, { payload }: PayloadAction<TodoPayload>) => {
      const dataTodo = [...state.listCategory];

      console.log('data pay', payload);

      dataTodo[payload.id].data = dataTodo[payload.id].data.filter(
        (item: TodoPayload) => item.idTodo !== payload.idRemove,
      );

      state.listCategory = dataTodo;
    },
    addItemTodo: (state, { payload }: PayloadAction<TodoPayload>) => {
      const dataTodo = [...state.listCategory];

      dataTodo[payload.id].data = [
        ...dataTodo[payload.id].data,
        payload.itemTodo,
      ];

      state.listCategory = dataTodo;
    },
    updateItemTodo: (state, { payload }: PayloadAction<TodoPayload>) => {
      const dataTodo = [...state.listCategory];

      console.log('pay laod', payload);

      dataTodo[payload.id].data[payload.indexUpdate] = {
        ...dataTodo[payload.id].data[payload.indexUpdate],
        ...payload.itemTodo,
      };

      state.listCategory = dataTodo;
    },
  },
});

export const { reducer: todoReducer, actions: todoActions } = todoSlice;
