/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
/**
 * == [ dark colors: web ] 
 * == == == == == == == == == */
export const 
   Palette = {
      sigrid: {
         d0: "#060707",
         d1: "#0c0e0f",
         d2: "#121417",
         d3: "#181b1e",
         d4: "#1e2226",
         d5: "#23292d",
         d6: "#293035",
         d7: "#2f363c",
         d8: "#353d44",
         d9: "#3b444B",
      },
      dark: {
         "0-": "#121417",
         "0": "#16181c",
         "1": "#1b1d22",
         "2": "#212329",
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
      },
      darkReader: {
         "0": "#0e0f0f",
         "1": "#181a1b",   /* a:[  ] */
         "2": "#1e2021",   /* b:[ e/8, , 12/6 ] */
         "3": "#282f3d",
      },
      andy: {
         "1": "#24181f",   /* a:[ 1, -1, 0 ] */
         "2": "#3a2d34",   /* b:[ 6, 4, 7 ] */
         "3": "#40343b",
      },
      holo: {
         "0": "#242424",
         "1": "#444",
      },
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
            "3": "#f0a",
         },
      },
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
