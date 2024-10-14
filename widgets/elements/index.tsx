

import { Palette } from "@/constants/Colors";
import { 
   Dimensions, Image, ImageBackground, 
   PressableProps, 
   ScrollView, 
   useColorScheme, 
   StyleSheet,
   View as ViewRN, type ViewProps, 
   Text as TextRN, type TextProps, 
   type ColorValue, type PushNotificationEventName,
   type DimensionValue,
   Pressable,
   TouchableOpacity, 
} from "react-native";
import styled from "styled-components/native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from "../icon";
import { PropsWithChildren, ReactNode, useState } from "react";
import { ThemedView } from "../ThemedView";

const 
   X = {
      /**
       * == [ texts ] 
       * == == == == == == == == == */

      /* == headings == */
      TT: styled.Text`
         font-size: 30px;
         font-weight: bold;
      `,
      H1: styled.Text`
         font-size: 30px;
         font-weight: bold;
      `,
      H2: styled.Text`
         font-size: 28px;
         font-weight: bold;
      `,
      H3: styled.Text`
         font-size: 25px;
         font-weight: bold;
      `,
      H4: styled.Text`
         font-size: 18px;
         font-weight: bold;
      `,
      H5: styled.Text`
         font-size: 16px;
         font-weight: bold;
      `,
      H6: styled.Text`
         font-size: 14px;
         font-weight: bold;
      `,

      /* == text == */
      P: styled.Text`
         font-size: 16px;
      `,
      T: styled.Text`
         font-size: 16px;
      `,
      Ts: styled.Text`
         font-size: 14px;
      `,
      Small: styled.Text`
         font-size: 14px;
      `,

   }
;

export const T = { ...X };
 

/** == [ View ]
 * == == == == == == == == == */
export type ViewSuperProps = ViewProps & {
   lightColor?: string;
   darkColor?: string;
   w?: DimensionValue;
   h?: DimensionValue;
   center?: boolean;
   pd?: number;
   ph?: number;
   pv?: number;
   gap?: number;
   borderRadius?: number;
   ratio?: string | number | undefined;
};

export function View({ style, lightColor, darkColor, pd, ...otherProps }: ViewSuperProps) {
   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

   return( <ViewRN 
      style={[
         darkColor || lightColor ? { backgroundColor } : null,
         { 
            // backgroundColor, 
            padding: pd,
            paddingHorizontal: otherProps.ph, 
            paddingVertical: otherProps.pv,
            width: otherProps.w,
            height: otherProps.h,
            gap: otherProps.gap,
            borderRadius: otherProps.borderRadius,
            aspectRatio: otherProps.ratio,
         }, 
         otherProps.center ? { alignItems: "center", justifyContent: "center", } : null,  
         style
      ]} {...otherProps} 
   /> );
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


/**
 * == [ HomePage ] 
 * == == == == == == == == == */
type HomePageProps = ViewProps & {
   h?: number | string;
   // bg?: string;
   ph?: number;
   pv?: number;
   // children?: any;
   style?: any;
   center?: boolean;
}

export function HomePage( { ...props }: HomePageProps ) {
   return(
      <View darkColor={ Palette.dark.bg } lightColor="#e5e5e5" 
         style={[ props.style, { 
            flex: 1, width: "100%", height: props.h || "100%", 
            paddingHorizontal: 0, paddingVertical: 0, 
         }, props.center ? { alignItems: "center", justifyContent: "center" } : "" ]}
         { ...props }   
      />
   );
}

/**
 * == [ Page ] 
 * == == == == == == == == == */
export function Page( { ...props }: ViewSuperProps ) {
   return(
      <ScrollView style={[ props.style, { 
         flex: 1, width: "100%", height: props.h || "100%", 
         backgroundColor: props.bg || "#f5f5f5", paddingHorizontal: props.ph, paddingVertical: props.pv, 
         } ]}>
         { props.children }
      </ScrollView>
   );
}

/**
 * == [ Header ] 
 * == == == == == == == == == */
type HeaderProps = {
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   ph?: number;
   pv?: number;
   children?: any;
   style?: any;
   center?: boolean;
   centerH?: boolean;
}

export function Header( { ...props }: HeaderProps ) {
   return(
      <View style={[ props.style, { 
         backgroundColor: props.bg, paddingHorizontal: props.ph, paddingVertical: props.pv, 
         width: "100%", minHeightheight: 56, height: props.h,
      }, 
         props.center ? { alignItems: "center", justifyContent: "center" } : "" 
         ,
         props.centerH ? { justifyContent: "center" } : ""
      ]}>
         { props.children }
      </View>
   );
}

/**
 * == [ Section ] 
 * == == == == == == == == == */
// export function Section({ style, LightColor, darkColor, ...otherProps }: SectionProps) {
export function Section({ ...props }: ViewSuperProps) {
   const 
      backgroundColor = useThemeColor(
         { 
            light: props.lightColor || "#0000", 
            dark: props.darkColor || "#0000" 
         }, 'background'
      )
   ;

   return( 
      <ViewRN 
         style={[
            { 
               backgroundColor, padding: props.pd,
               paddingHorizontal: props.ph,
               paddingVertical: props.pv,
               gap: props.gap,
               width: props.w,
               height: props.h,
            }, 
            props.center ? { alignItems: "center", justifyContent: "center", } : null,
            props.style
         ]} {...props} 
      />
   );
}

/**
 * == [ Content ] 
 * == == == == == == == == == */
type ContentType = ViewSuperProps & {
   position?: "absolute" | "relative" | "static";
   top?: number;
   bottom?: number;
   left?: number;
   right?: number;
}
export function Content( { position, top, bottom, left, right, ...props }: ContentType ) {
   const 
      backgroundColor = useThemeColor(
         { 
            light: props.lightColor || "#0000", 
            dark: props.darkColor || "#0000" 
         }, 'background'
      )
   ;
 
   return( 
      <ViewRN 
         style={[
            { 
               backgroundColor, padding: props.pd || 24,
               paddingHorizontal: props.ph,
               paddingVertical: props.pv,
               gap: props.gap,
               width: props.w,
               height: props.h,
               position,
               top,
               bottom,
               left,
               right,
            }, 
            props.center ? { alignItems: "center", justifyContent: "center", } : null,
            props.style
         ]} {...props} 
      />
   );
}



/**
 * == [ Grid ] 
 * == == == == == == == == == */
type GridType = ViewSuperProps & {
   sizeH?: number;
   sizeV?: number;
}
export function Grid( { ...props }: GridType ) {
   return( <View 
      darkColor={ props.darkColor } 
      lightColor={ props.lightColor }
      style={[
         // props.sizeH ? 
         {
            flex: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",

         }
      ]} { ...props }
   /> );      
}



/**
 * == [ Tile ] 
 * == == == == == == == == == */
type TileProps = ViewSuperProps & {
   btn?: boolean;
   onPress?: () => void;
}

export function Tile( { onPress, ...props }: TileProps ) {
   return( <>
      <View darkColor="#0000" lightColor="#0000" pd={2}>
         <View darkColor="#212329" lightColor="#f5f5f5" borderRadius={18} pd={24}
            w={ Dimensions.get( "window" ).width / 2.3 }
            ratio="1 / 1"
            { ...props }
         />
      </View>
   </> );
}



/**
 * == [ Picture ] 
 * == == == == == == == == == */
type PictureProps = {
   w?: number | string;
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   ph?: number;
   pv?: number;
   children?: any;
   style?: any;
   center?: boolean;
}

export function Picture( { ...props }: PictureProps ) {
   return(
      <View style={[ props.style, { 
         backgroundColor: props.bg, paddingHorizontal: props.ph, paddingVertical: props.pv, 
         width: props.w || "100%", height: props.h || "auto", 
      }, props.center ? { alignItems: "center", justifyContent: "center" } : "" ]}>
         { props.children }
      </View>
   );
}

/**
 * == [ Pix ] 
 * == == == == == == == == == */
type PixProps = {
   image: any;
   w?: DimensionValue;
   h?: DimensionValue;
   mode?: "center" | "cover" | "contain" | "repeat" | "stretch";
   style?: any;
}

export function Pix( { ...props }: PixProps ) {
   return(
      <Image 
         source={ props.image }
         resizeMode={ props.mode || "contain" }
         style={[ props.style, { 
            width: props.w || "100%",   
            overflow: "hidden",
            height: props.h || Dimensions.get( "window" ).width,
         } ]}
      />
   );
}



/**
 * == [ Code ] 
 * == == == == == == == == == */
type CodeProps = {
   w?: number | string;
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   ph?: number;
   pv?: number;
   title?: string;
   // children?: any;
   script: string;
   style?: any;
   center?: boolean;
}

export function Code( { ...props }: CodeProps ) {
   return( <>
      <View style={{ borderRadius: 13, overflow: "hidden", marginVertical: 16, }}>
         <View style={{ backgroundColor: "#1b1d22", height: 36, justifyContent: "center", paddingHorizontal: 16, }}>
            <TextRN style={{ color: "#fc0" }}>{ props.title }</TextRN>
         </View>
         <View style={[ props.style, { 
            backgroundColor: props.bg || "#000", paddingHorizontal: props.ph || 24, paddingVertical: props.pv || 24, 
            width: props.w || "100%", height: props.h || "auto", 
         }, props.center ? { alignItems: "center", justifyContent: "center" } : "" ]}>
            {/* { props.children } */}
            <TextRN style={{ color: "#eee", lineHeight: 22,  }}>{ props.script }</TextRN>
         </View>
      </View> 
   </> );
}



/** == [ ol ]
 * == == == == == == == == == */
type LI = {
   item: ReactNode;
}

type OL = {
   children?: ReactNode;
   li: LI[];
}

export function OL( { ...props }: OL ) {
   return( props.li.map( ( item, i ) => ( <>
      <View
         key={ `ol-item:${ i }` }
         style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 24,
            paddingVertical: 12,
            // backgroundColor: "#fff"
         }}
      >
         <Icon family="Octicons" name="dot-fill" color={ Palette.accent.amber[0] }/>
         <Text>{ item }</Text>
      </View>
   </> ) ) );
   // return(  );
}



/** == [ ul ]
 * == == == == == == == == == */
type UL = {
   children?: ReactNode;
   li: LI[];
}

export function UL( { ...props }: UL ) {
   return( props.li.map( ( item, i ) => ( <>
      <View
         key={ `ol-item:${ i }` }
         style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingLeft: 24,
            // backgroundColor: "#fff"
         }}
      >
         <Text h={2} darkColor={ Palette.accent.amber[0] }>{ i + 1 }</Text>
         <Text>{ item }</Text>
      </View>
   </> ) ) );
   // return(  );
}



/** == [ Collapsible ]
 * == == == == == == == == == */
export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
   const [isOpen, setIsOpen] = useState(false);
   const theme = useColorScheme() ?? 'light';
 
   return (
      <View darkColor="#0000" lightColor="#0000">
         <TouchableOpacity
            style={styles.CollapsibleHeading}
            onPress={() => setIsOpen((value) => !value)}
            activeOpacity={0.8}>
            <Icon 
               family="Ionicons"
               name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
               size={18}
               color={theme === 'light' ? Palette.dark.accent.blue : Palette.dark.accent.amber[0] }
            />
            <Text type="defaultSemiBold">{title}</Text>
         </TouchableOpacity>
         {isOpen && <View  style={styles.CollapsibleContent}>{children}</View>}
      </View>
   );
 }



/** == [ TabBarIcon ]
 * == == == == == == == == == */
type TabBarIconType = {
   focused?: boolean;
   color?: string;
   size?: number;
   title: string;
   name?: string;
   family?: string;
}

export function TabBarIcon( { focused, color, size, title, name, family, ...props }: TabBarIconType ) {
   return(
      <View darkColor={ focused ? "#212329" : "#1b1d2255" } lightColor="#f5f5f5" 
         h={45}
         ratio={ focused ? "2.2 / 1" : "1.2 / 1" }
         borderRadius={99} 
         style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderColor: Palette.dark.bg_lv1,
            borderWidth: focused ? 5 : 0,
         }}
         { ...props }
      >
         <Icon 
            family={ family || "Ionicons" } color={ color || focused ? "#a90" : "#f0a" } 
            name={ name }
         />
         { focused && <Text>{ title }</Text> }
      </View>
   );
}



/** == [ StyleSheet ]
 * == == == == == == == == == */
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

   // collapsible
   CollapsibleHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
   },
   CollapsibleContent: {
      marginTop: 6,
      marginLeft: 24,
   },
} );



/* == [ exports ] == == == == == == == == == */
export default X;