import { icons } from '@assets/icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Calendar from '@screens/Calendar';
import Home from '@screens/Home';

export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  LOGIN = 'LOGIN',
  AUTHORIZE = 'AUTHORIZE',
  TABMAIN = 'TABMAIN',
  TODOLIST = 'TODOLIST',
}

export enum MODAL_SCREEN {
  MODALADDCATEGORY = 'MODALADDCATEGORY',
  MODALADDTODO = 'MODALADDTODO',
}

export enum TAB_SCREEN {
  HOME = 'Nhiệm vụ',
  CALENDAR = ' Lịch',
}

export const TAB_SCREEN_DYNAMIC = {
  home: {
    screen: TAB_SCREEN.HOME,
    icon: 'icTask',
    component: Home,
  },
  calendar: {
    screen: TAB_SCREEN.CALENDAR,
    icon: 'icCalendar',
    component: Calendar,
  },
};

export type RootStackParamList = {
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
  [APP_SCREEN.TABMAIN]: undefined;
  [TAB_SCREEN.HOME]: undefined;
  [TAB_SCREEN.HOME]: undefined;
  [APP_SCREEN.TODOLIST]: {
    idTodo: number;
    title: string;
    idCategory: number;
  };
  [MODAL_SCREEN.MODALADDCATEGORY]: undefined;
  [MODAL_SCREEN.MODALADDTODO]: {
    idTodo: number;
    nameTodo?: string;
    noteTodo?: string;
  };
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
