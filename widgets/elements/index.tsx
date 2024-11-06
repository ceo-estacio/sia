

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
import Icon, { IconType } from "../icon";
import { PropsWithChildren, ReactElement, ReactNode, useState } from "react";
import { ThemedView } from "../ThemedView";
import Animated, { 
   FadeInRight, 
   AnimatedProps, 
   FadeOutRight, 
   LinearTransition, 
   withSpring,
   useDerivedValue,
   withTiming,
   useAnimatedStyle,
   interpolate,
   useSharedValue,
} from "react-native-reanimated";
import { ThemedTextProps } from "../ThemedText";

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

export function View( { style, lightColor, darkColor, pd, ...otherProps }: ViewSuperProps ) {
   const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor }, 
      'background'
   );

   return( <ViewRN 
      style={[
         darkColor ? { backgroundColor } : lightColor ? { backgroundColor } : null,
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
      ]} 
      { ...otherProps } 
   /> );
}


/** == [ Text ]
 * == == == == == == == == == */
export type TextSuperProps = TextProps & {
   lightColor?: string;
   darkColor?: string;
   h?: 1 | 2 | 3 | 4 | 5 | 6;
   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function Text( {
  style,
//   lightColor = "#333",
  lightColor,
//   darkColor = Palette.dark.text,
  darkColor,
  h,
  type = 'default',
  ...rest
}: TextSuperProps ) {
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

            h == 1 ? styles.H1 : undefined,
            h == 2 ? styles.H2  : undefined,
            h == 3 ? styles.H3  : undefined,
            h == 4 ? styles.H4  : undefined,
            h == 5 ? styles.H5  : undefined,
            h == 6 ? styles.H6 : undefined,

            style,
         ] }
         { ...rest }
      />
   );
}


/** == [ Text Animated ]
 * == == == == == == == == == */
export type TextAniProps = TextSuperProps & {
};

export function TextAni( {
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
   h?: DimensionValue;
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
      // <View darkColor={ Palette.andy[1] } lightColor="#e5e5e5" 
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
         paddingHorizontal: props.ph, paddingVertical: props.pv, 
         } ]}>
         { props.children }
      </ScrollView>
   );
}

/**
 * == [ Header ] 
 * == == == == == == == == == */
type HeaderProps = ViewSuperProps & {
   bg?: ColorValue;
   center?: boolean;
   centerH?: boolean;
}

export function Header( { ...props }: HeaderProps ) {
   return(
      <View style={[ props.style, { 
         backgroundColor: props.bg || props.darkColor || props.lightColor, 
         paddingHorizontal: props.ph, 
         paddingVertical: props.pv, 
         width: "100%", 
         minHeight: 56, 
         height: props.h,
         padding: props.pd,
      }, 
         props.center ? { alignItems: "center", justifyContent: "center" } : null 
         ,
         props.centerH ? { justifyContent: "center" } : null
      ]}>
         { props.children }
      </View>
   );
}

/**
 * == [ Section ] 
 * == == == == == == == == == */
type SectionProps = ViewSuperProps & {
   label?: string;
   hpd?: DimensionValue;
   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
}

export function Section( { ...props }: SectionProps ) {
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
      >
         { 
            props.label && (
               <Header
                  pd={ props.hpd }
               >
                  <Text type={ props.type || "subtitle" }>{ props.label }</Text>
               </Header> 
            )
         }
         { props.children }
      </ViewRN>
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


/** == [ Horizontal ]
 * == == == == == == == == == */
export function Horizontal( { ...props } ) {
   return( <>
      <Section 
         style={{
            backgroundColor: Palette.dark.bg_lv3,
         }}
      >
         <ScrollView horizontal
            style={{

            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  padding: 18,
                  gap: 18,
               }}
            >
               { props.children }
            </View>
         </ScrollView>
      </Section>
   </> );
}



/**
 * == [ Card ] 
 * == == == == == == == == == */
export function Card( { ...props } ) {
   return( <>
      <View 
         style={{
            borderRadius: 24,
            backgroundColor: props.bg || "#fff",
            overflow: "hidden",
            aspectRatio: "16/9",
            width: Dimensions.get( "window" ).width * .7,
         }}
      >
         {  props.children }
      </View>
   </> );
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
         style={[ { 
            width: props.w || "100%",   
            overflow: "hidden",
            height: props.h || Dimensions.get( "window" ).width,
         },
         props.style ]}
      />
   );
}


/**
 * == [ Pix ] 
 * == == == == == == == == == */
type PixBGProps = {
   source: any;
   w?: DimensionValue;
   h?: DimensionValue;
   resizeMode?: "center" | "cover" | "contain" | "repeat" | "stretch";
   style?: any;
   
}
export function PixBG( { ...props }: PixBGProps ) {
   return(
      <ImageBackground 
         source={ props.source }
         style={[ 
            { width: props.w || "100%", height: props.h || 210, 

            },
            props.style
         ] } 
         resizeMode={ props.resizeMode || "contain" }
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



/** == [ List ]
 * == == == == == == == == == */
type ListItemType = {
   item: ReactNode;
}

type ListType = {
   children?: ReactNode;
   type?: ReactNode;
   color?: ColorValue;
   gap?: number;
}

export function List( { ...props }: ListType ) {
   return( <>
      <Content gap={8} style={{ flexDirection: "row", marginVertical: 8, alignItems: "flex-start", paddingHorizontal: 24, }}>
         {
            props.type ||
            <Icon family="Octicons" name="dot-fill" color={ props.color || "#c33" }/>
         }
         <View style={{ gap: props.gap || 8 }}>{ props.children }</View>
      </Content>
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



/** == [ Li ]
 * == == == == == == == == == */
export function Li({ children, title }: PropsWithChildren & { title?: string }) {
   const [isOpen, setIsOpen] = useState(false);
   const theme = useColorScheme() ?? 'light';
 
   return (
      <View darkColor="#0000" lightColor="#0000" ph={24}>
         <TouchableOpacity
            style={styles.CollapsibleHeading}
            onPress={() => setIsOpen((value) => !value)}
            activeOpacity={0.8}>
            <Icon 
               family="Ionicons"
               // name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
               name="chevron-forward-outline"
               size={18}
               color={theme === 'light' ? Palette.dark.accent.blue : Palette.dark.accent.amber[0] }
            />
            <Text darkColor="#ddd" lightColor="#121212" type="defaultSemiBold">{title}</Text>
            <Text>{  children }</Text>
         </TouchableOpacity>
         {isOpen && <View  style={styles.CollapsibleContent}>{children}</View>}
      </View>
   );
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
            <Text darkColor="#ddd" lightColor="#121212" type="defaultSemiBold">{title}</Text>
         </TouchableOpacity>
         {isOpen && <View  style={styles.CollapsibleContent}>{children}</View>}
      </View>
   );
}



/** == [ TabBarIcon ]
 * == == == == == == == == == */
type TabBarIconType = IconType & {
   title: string;
   focused?: boolean;
   // color?: string;
   // size?: number;
   // name?: string;
   // family?: string;
}

export function TabBarIcon( { focused, color, size, title, name, family, ...props }: TabBarIconType ) {
   const w = useSharedValue( 110 );
   
   return(
      <Animated.View 
         // layout={ LinearTransition.springify().damping( 80 ).stiffness( 200 ) }
         // layout={ LinearTransition.springify().damping( 80 ).stiffness( 200 ) }
         style={{
            backgroundColor: focused ? "#212329" : "#1b1d2255",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: 45,
            aspectRatio: focused ? "2.2 / 1" : "1.2 / 1",
            // width: focused ? withSpring( 150 ) : withSpring( 54 ),
            // width: focused ? w.value = 110 : w.value = 54,
            borderRadius: 99,
            borderColor: Palette.dark.bg_lv1,
            borderWidth: focused ? 5 : 0,
         }}
      >
         <Icon 
            family={ family || "Ionicons" } color={ color || focused ? "#a90" : "#f0a" } 
            name={ name }
         />
         { 
            focused && 
            <Animated.Text
               // entering={ FadeInRight.springify().damping( 80 ).stiffness( 200 ) }
               // exiting={ FadeOutRight.springify().damping( 80 ).stiffness( 200 ) }
               style={{
                  fontSize: 16,
                  lineHeight: 24,
                  color: Palette.dark.text,
               }}
            >
               { title }
            </Animated.Text> 
         }
      </Animated.View>
   );
}



/** == [ Exercices ]
 * == == == == == == == == == */
type ExercicesProps = {
   id: number;
   question: ReactElement;
   answer: ReactElement;
}

export function Exercices( props: ExercicesProps ) {
   return(
      <View darkColor={ Palette.dark.bg_lv1 } pd={16}>
         <View ratio={1} borderRadius={8}
            style={{ borderColor: "#9995", borderWidth: 1, width: 26, alignItems: "center", justifyContent: "center", }}
         >
            <Text>{ props.id }</Text>
         </View>
         <View pv={16} gap={8}>
            { props.question }
         </View>
         <View borderRadius={9} pd={16}
            style={{
               borderColor: "#006400", borderWidth: .5,
            }}
         >
            { props.answer }
         </View>
      </View>
   );
}



/** == [ StyleSheet ]
 * == == == == == == == == == */
type ExercicioProps = {
   title: string;
   question?: ReactElement;
   answer?: ReactElement;
}

export function Exercicio( { ...props }: ExercicioProps ) {
   return( <>
      <View 
         { ...props }
         style={{ 
            borderRadius: 13,
            // backgroundColor: Palette.dark.bg_lv2,
            backgroundColor: Palette.dark.bg_lv2,
            // backgroundColor: Palette.andy[2],
            overflow: "hidden",
         }}
      >
         <Header ph={8} pv={8} bg="#00559c">
            <Text>{ props.title }</Text>
         </Header>
         <View gap={24} style={{
            padding: 16,

         }}>
            <View gap={8}>{ props.question }</View>
            <View darkColor={ Palette.andy[3] } borderRadius={13} pd={16}>{ props.answer }</View>
         </View>
      </View>
   </> );
}

type QeaProps = {
   children?: any;
}

export function Qea( { ...props }: QeaProps ) {
   return( 
      <Text h={4}>{ props.children }</Text>
   );
}

type ResProps = {
   title?: string;
   children?: any;
}

export function Res( { ...props }: ResProps ) {
   return( 
      <Text darkColor="#777">{ props.children }</Text>
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