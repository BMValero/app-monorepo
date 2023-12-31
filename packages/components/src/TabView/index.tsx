import {
  PageContentView,
  PageHeaderView,
  PageManager,
  SelectedLabel,
} from 'react-native-tab-page-view';

PageHeaderView.defaultProps = {
  ...PageHeaderView.defaultProps,
  titleFromItem: (item: any) => (item as { title: string }).title,
  itemContainerStyle: { paddingHorizontal: 12, marginRight: 8 },
  itemTitleStyle: { fontSize: 15 },
  itemTitleNormalStyle: { color: '#333' },
  itemTitleSelectedStyle: { color: 'orange', fontSize: 17 },
  cursorStyle: {
    width: null,
    // width: 30,
    // borderRadius: 1,
    height: 2,
    backgroundColor: 'orange',
  },
};

export { PageHeaderView, PageContentView, PageManager, SelectedLabel };
