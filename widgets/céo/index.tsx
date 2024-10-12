

import { 
   View as ViewRN, type ViewProps, 
   Text as TextRN, type TextProps, 
   StyleSheet,
} from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Palette } from "@/constants/Colors";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ View ]
 * == == == == == == == == == */
export type ViewSuperProps = ViewProps & {
   lightColor?: string;
   darkColor?: string;
   pd?: number;
   ph?: number;
   pv?: number;
   gap?: number;
};

export function View({ style, lightColor = "#e5e5e5", darkColor = Palette.dark[0], ...otherProps }: ViewSuperProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ViewRN style={[{ backgroundColor }, style]} {...otherProps} />;
}


/** == [ Text ]
 * == == == == == == == == == */
export type ThemedTextProps = TextProps & {
   lightColor?: string;
   darkColor?: string;
   h?: 1 | 2 | 3 | 4 | 5 | 6;
   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function Text( {
  style,
  lightColor = "#333",
  darkColor = Palette.dark.text,
  h,
  type = 'default',
  ...rest
}: ThemedTextProps ) {
  const color = useThemeColor( { light: lightColor, dark: darkColor }, 'text' );

   return(
      <TextRN
         style={ [
            { color },
            type === 'default' ? styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined,

            h == 1 ? styles.H1 
            : h == 2 ? styles.H2 
            : h == 3 ? styles.H3 
            : h == 4 ? styles.H4 
            : h == 5 ? styles.H5 
            : styles.H6,

            style,
         ] }
         { ...rest }
      />
   );
}

const styles = StyleSheet.create( {
   default: {
      fontSize: 16,
      lineHeight: 24,
   },
   defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
   },
   title: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 32,
   },
   subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 30,
   },
   link: {
      lineHeight: 30,
      fontSize: 16,
      color: '#0a7ea4',
   },

   TT: {
      fontSize: 30,
      lineHeight: 45,
      fontWeight: "bold",
   },
   H1: {
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 45,
   },
   H2: {
      fontSize: 28,
      fontWeight: "bold",
      lineHeight: 42,
   },
   H3: {
      fontSize: 25,
      fontWeight: "bold",
      lineHeight: 37.5,
   },
   H4: {
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 27,
   },
   H5: {
      fontSize: 16,
      fontWeight: "bold",
      lineHeight: 24,
   },
   H6: {
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: 21,
   },

   /* == text == */
   P: {
      fontSize: 16,
   },
   T: {
      fontSize: 16,
   },
   Ts: {
      fontSize: 14,
   },
   Small: {
      fontSize: 14,
   },
} );
