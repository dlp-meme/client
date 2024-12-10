import type { GlobalThemeOverrides } from "naive-ui";
import { flavors } from "@catppuccin/palette";

export const darkTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: flavors.mocha.colors.blue.hex,
    errorColor: flavors.mocha.colors.red.hex,
    successColor: flavors.mocha.colors.green.hex,
    textColorBase: flavors.mocha.colors.text.hex,
    borderColor: flavors.mocha.colors.overlay0.hex,
    baseColor: flavors.mocha.colors.base.hex,
  }
}
