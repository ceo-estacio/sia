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
         bar: "#1c1218",
         bg: "#24171f",
         bg_lv1: "#271b23",
         tint: "#f0a",
         d0: "#060707",
         d1: "#0c0e0f",
         d2: "#1c1218",
         d3: "#181b1e",
         d4: "#1e2226",
         d5: "#23292d",
         d6: "#293035",
         d7: "#2f363c",
         d8: "#353d44",
         d9: "#3b444B",
      },
      dark: {
         "0": "#1c1218",
         "1": "#24171f",
         "2": "#271b23",
         "3": "#2d2129",

         a0: "#1c1218",
         a1: "#24171f",
         a2: "#271b23",
         a2_2: "#1c1e29",
         a3: "#2d2129",
         a3_2: "#292a38",

         bar: "#1c1218",
         bg: "#24171f",       // "1": "#24181f",   /* a:[ 1, -1, 0 ] */
         bg_lv1: "#271b23",   
         bg_lv2: "#2d2129",   // "2": "#3a2d34",   /* b:[ 6, 4, 7 ] */
         bg_lv3: "#2d2129",   // "3": "#40343b",
         
         text: "#999",
         tint: "#f0a",
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
      whats: {
         "0": "#0b141a",
         "1": "#111b24",
         "2": "#202c33",
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
      background: '#e5e5e5',
      tint: tintColorLight,
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLight,
   },
   dark: {
      text: '#ECEDEE',
      background: Palette.dark.bg,
      tint: tintColorDark,
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDark,
   },
};
