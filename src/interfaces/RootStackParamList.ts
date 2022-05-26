export type RootStackParamList = {
  TopTabs: undefined;
  ShowListScreen: {
    index: number;
    title: string;
  };
  ListByFilterScreen: {
    title: string;
    items: Array<string>;
    index: number;
    indexList: number;
  };
};
