import { flavors } from '@catppuccin/palette';
import type { GlobalThemeOverrides } from 'naive-ui';

export const darkTheme: GlobalThemeOverrides = {
  common: {
    bodyColor: flavors.mocha.colors.base.hex,
    primaryColor: flavors.mocha.colors.blue.hex,
    errorColor: flavors.mocha.colors.red.hex,
    successColor: flavors.mocha.colors.green.hex,
    textColorBase: flavors.mocha.colors.text.hex,
    textColor1: flavors.mocha.colors.text.hex,
    textColor2: flavors.mocha.colors.text.hex,
    textColor3: flavors.mocha.colors.text.hex,
    borderColor: flavors.mocha.colors.overlay0.hex,
    baseColor: flavors.mocha.colors.base.hex,
  },
  Scrollbar: {
    color: flavors.mocha.colors.surface0.hex,
    colorHover: flavors.mocha.colors.surface2.hex,
  },
  Notification: {
    closeBorderRadius: '100%',
    textColor: flavors.mocha.colors.text.hex,
    headerTextColor: flavors.mocha.colors.text.hex,
    color: flavors.mocha.colors.surface0.hex,
    iconColorError: flavors.mocha.colors.red.hex,
    iconColorSuccess: flavors.mocha.colors.green.hex,
    iconColorInfo: flavors.mocha.colors.blue.hex,
    iconColorWarning: flavors.mocha.colors.yellow.hex,
    closeColorHover: flavors.mocha.colors.surface2.hex,
    closeIconColorHover: flavors.mocha.colors.text.hex,
    borderRadius: '16px',
  },
};
