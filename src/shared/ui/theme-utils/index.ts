export const setupDatasetTheme = (isDark: boolean, element: HTMLElement) => {
  if (isDark) {
    element.dataset.theme = 'dark';
  } else {
    element.dataset.theme = 'light';
  }
};
