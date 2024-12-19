import { flavors } from '@catppuccin/palette';
import type { GlobalThemeOverrides } from 'naive-ui';

export const darkTheme: GlobalThemeOverrides = {
  common: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: '20px',
    fontSizeHuge: '24px',
    fontSizeLarge: '22px',
    fontSizeMedium: '20px',
    fontSizeSmall: '18px',
    fontSizeTiny: '16px',
    fontSizeMini: '14px',
    bodyColor: flavors.mocha.colors.base.hex,
    primaryColor: flavors.mocha.colors.blue.hex,
    errorColor: flavors.mocha.colors.red.hex,
    successColor: flavors.mocha.colors.green.hex,
    textColorBase: flavors.mocha.colors.text.hex,
    textColor1: flavors.mocha.colors.subtext1.hex,
    textColor2: flavors.mocha.colors.subtext0.hex,
    textColor3: flavors.mocha.colors.subtext0.hex,
    borderColor: flavors.mocha.colors.overlay0.hex,
    baseColor: flavors.mocha.colors.base.hex,
  },
  Layout: {
    headerColor: flavors.mocha.colors.crust.hex,
    siderColor: flavors.mocha.colors.crust.hex,
    headerBorderColor: flavors.mocha.colors.overlay0.hex,
    siderBorderColor: flavors.mocha.colors.overlay0.hex,
    siderToggleButtonBorder: `1px solid ${flavors.mocha.colors.overlay0.hex}`,
    siderToggleButtonIconColor: flavors.mocha.colors.overlay2.hex,
    siderToggleButtonColor: flavors.mocha.colors.crust.hex,
  },
  Menu: {
    itemColorHover: flavors.mocha.colors.surface0.hex,
    borderRadius: '8px',
    peers: {
      Tooltip: {
        color: flavors.mocha.colors.surface0.hex,
        textColor: flavors.mocha.colors.text.hex,
        borderRadius: '8px',
      }
    }
  },
  Scrollbar: {
    color: flavors.mocha.colors.surface0.hex,
    colorHover: flavors.mocha.colors.surface2.hex,
  },
  Notification: {
    closeBorderRadius: '100%',
    titleFontSize: '20px',
    textColor: flavors.mocha.colors.text.hex,
    headerTextColor: flavors.mocha.colors.text.hex,
    color: flavors.mocha.colors.surface0.hex,
    iconColorError: flavors.mocha.colors.red.hex,
    iconColorSuccess: flavors.mocha.colors.green.hex,
    iconColorInfo: flavors.mocha.colors.sky.hex,
    iconColorWarning: flavors.mocha.colors.yellow.hex,
    closeColorHover: flavors.mocha.colors.surface2.hex,
    closeIconColorHover: flavors.mocha.colors.text.hex,
    borderRadius: '16px',
  },
  Input: {
    borderRadius: '8px',
    boxShadowFocus: 'none',

    color: flavors.mocha.colors.crust.hex,
    colorFocus: flavors.mocha.colors.mantle.hex,
    colorFocusError: flavors.mocha.colors.mantle.hex,
    colorFocusWarning: flavors.mocha.colors.mantle.hex,

    textColor: flavors.mocha.colors.text.hex,

    border: `1px solid ${flavors.mocha.colors.overlay0.hex}`,

    borderFocus: `1px solid ${flavors.mocha.colors.lavender.hex}`,
    borderHover: `1px solid ${flavors.mocha.colors.lavender.hex}`,

    borderError: `1px solid ${flavors.mocha.colors.red.hex}`,
    borderFocusError: `1px solid ${flavors.mocha.colors.red.hex}`,
    borderHoverError: `1px solid ${flavors.mocha.colors.red.hex}`,

    borderWarning: `1px solid ${flavors.mocha.colors.yellow.hex}`,
    borderFocusWarning: `1px solid ${flavors.mocha.colors.yellow.hex}`,
    borderHoverWarning: `1px solid ${flavors.mocha.colors.yellow.hex}`,
  },
  Button: {
    borderRadiusLarge: '16px',
    borderRadiusMedium: '16px',
    borderRadiusSmall: '16px',
    borderRadiusTiny: '16px',

    primaryColor: flavors.mocha.colors.blue.hex,
    borderPrimary: flavors.mocha.colors.blue.hex,
    borderHoverPrimary: flavors.mocha.colors.blue.hex,
    borderFocusPrimary: flavors.mocha.colors.blue.hex,
    borderPressedPrimary: flavors.mocha.colors.blue.hex,
    colorPressedPrimary: flavors.mocha.colors.blue.hex,
    colorFocusPrimary: flavors.mocha.colors.blue.hex,
    colorHoverPrimary: flavors.mocha.colors.blue.hex,

    colorInfo: flavors.mocha.colors.sky.hex,
    borderInfo: flavors.mocha.colors.sky.hex,
    borderHoverInfo: flavors.mocha.colors.sky.hex,
    borderFocusInfo: flavors.mocha.colors.sky.hex,
    borderPressedInfo: flavors.mocha.colors.sky.hex,
    colorPressedInfo: flavors.mocha.colors.sky.hex,
    colorFocusInfo: flavors.mocha.colors.sky.hex,
    colorHoverInfo: flavors.mocha.colors.sky.hex,

    errorColor: flavors.mocha.colors.red.hex,
    borderError: flavors.mocha.colors.red.hex,
    borderHoverError: flavors.mocha.colors.red.hex,
    borderFocusError: flavors.mocha.colors.red.hex,
    borderPressedError: flavors.mocha.colors.red.hex,
    colorPressedError: flavors.mocha.colors.red.hex,
    colorFocusError: flavors.mocha.colors.red.hex,
    colorHoverError: flavors.mocha.colors.red.hex,
    colorOpacitySecondary: '0.15',

    successColor: flavors.mocha.colors.green.hex,
    borderSuccess: flavors.mocha.colors.green.hex,
    borderHoverSuccess: flavors.mocha.colors.green.hex,
    borderFocusSuccess: flavors.mocha.colors.green.hex,
    borderPressedSuccess: flavors.mocha.colors.green.hex,
    colorPressedSuccess: flavors.mocha.colors.green.hex,
    colorFocusSuccess: flavors.mocha.colors.green.hex,
    colorHoverSuccess: flavors.mocha.colors.green.hex,

    textColorBase: flavors.mocha.colors.text.hex,
    textColor1: flavors.mocha.colors.text.hex,
    textColor2: flavors.mocha.colors.text.hex,
    textColor3: flavors.mocha.colors.text.hex,

    borderColor: flavors.mocha.colors.overlay0.hex,
    baseColor: flavors.mocha.colors.surface0.hex,

    colorQuaternaryHover: flavors.mocha.colors.surface1.hex,
    colorQuaternaryPressed: flavors.mocha.colors.surface1.hex,

    colorTertiaryHover: flavors.mocha.colors.surface1.hex,
    colorTertiaryPressed: flavors.mocha.colors.surface1.hex,

    waveOpacity: '0',
  },
  Modal: {
    peers: {
      Card: {
        colorModal: flavors.mocha.colors.surface0.hex,
        color: flavors.mocha.colors.surface0.hex,
        borderRadius: '16px',
        borderColor: flavors.mocha.colors.surface2.hex,
        closeBorderRadius: '100%',
        closeColorHover: flavors.mocha.colors.surface2.hex,
        closeIconColorHover: flavors.mocha.colors.text.hex,
        actionColor: flavors.mocha.colors.surface0.hex,
        closeIconColor: flavors.mocha.colors.subtext0.hex,
      },
      Dialog: {
        titleFontSize: '1.1em',
        color: flavors.mocha.colors.surface0.hex,
        borderRadius: '16px',
        border: `1px solid ${flavors.mocha.colors.surface2.hex}`,
        closeBorderRadius: '100%',
        closeColorHover: flavors.mocha.colors.surface2.hex,
        closeIconColorHover: flavors.mocha.colors.text.hex,
        closeIconColor: flavors.mocha.colors.subtext0.hex,
        iconColorError: flavors.mocha.colors.red.hex,
        iconColorSuccess: flavors.mocha.colors.green.hex,
        iconColorInfo: flavors.mocha.colors.sky.hex,
        iconColorWarning: flavors.mocha.colors.yellow.hex,
      },
    },
  },
};
