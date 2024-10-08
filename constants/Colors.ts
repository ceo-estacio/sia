/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
/**
 * == [ dark colors: web ] 
 * == == == == == == == == == */
export const 
   Palette = {
      dark: {
         "0": "#16181c",
         "1": "#1b1d22",
         "2": "#212329",
         // "0": "#0e0f0f",
         // "1": "#181a1b",
         // "2": "#1e2021",
         text: "#ddd",
         accent: {
            blue: {
               "0": "#0af",
               "1": "#27f",
            },
            amber: {
               "0": "#fc0",
               "1": "#fa0",
               "2": "#daa520",
            },
            purple: {
               "0": "#fc0",
               "1": "#fc0fc0",
               "2": "#daa520",
            },
         }
      }
   }
;


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
