

import { View as ViewRN, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Palette } from "@/constants/Colors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export type ViewSuperProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  pd?: number;
  ph?: number;
  pv?: number;
  gap?: number;
  
};

export function ThemedView({ style, lightColor = "#e5e5e5", darkColor = Palette.dark[0], ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ViewRN style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function View( { style, 
                        // lightColor = "#e5e5e500", 
                        // darkColor = Palette.dark[0], 
                        lightColor , 
                        darkColor, 
                        ...otherProps }: ViewSuperProps ) {
   const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor }, 
      'background'
   );

   return (
      <ViewRN 
         style={[
            { backgroundColor }, 
            style
         ]} 
         { ...otherProps } 
      />
   );
}

