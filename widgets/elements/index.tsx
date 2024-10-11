

import { Palette } from "@/constants/Colors";
import { Dimensions, Image, ImageBackground, PressableProps, ScrollView, Text as TextRN, useColorScheme, View, 
   type ColorValue, type PushNotificationEventName,
   type TextProps,
} from "react-native";
import styled from "styled-components/native";

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

// type Txt = {
//    color?: ColorValue;
// } 
export function Text( { ...props }: TextProps ) {
   return( 
      <TextRN style={[ { color: Palette.dark.text, fontSize: 16, }, props.style ]}>
         { props.children }
      </TextRN>
   );
}

/**
 * == [ HomePage ] 
 * == == == == == == == == == */
type HomePageProps = {
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   ph?: number;
   pv?: number;
   children?: any;
   style?: any;
   center?: boolean;
}

export function HomePage( { ...props }: HomePageProps ) {
   return(
      <View style={[ props.style, { 
         flex: 1, width: "100%", height: props.h || "100%", 
         backgroundColor: props.bg || "#f5f5f5", paddingHorizontal: 0, paddingVertical: 0, 
         }, props.center ? { alignItems: "center", justifyContent: "center" } : "" ]}>
         { props.children }
      </View>
   );
}

/**
 * == [ Page ] 
 * == == == == == == == == == */
type PageProps = {
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   ph?: number;
   pv?: number;
   children?: any;
   style?: any;
}

export function Page( { ...props }: PageProps ) {
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
type SectionProps = {
   h?: number | string;
   // bg?: string;
   bg?: ColorValue;
   pd?: number;
   ph?: number;
   pv?: number;
   gap?: number;
   children?: any;
   style?: any;
   center?: boolean;
}

export function Section( { ...props }: SectionProps ) {
   return(
      <View style={[ props.style, { 
         backgroundColor: props.bg, paddingHorizontal: props.ph, paddingVertical: props.pv, 
         padding: props.pd,
         gap: props.gap,
         width: "100%", height: props.h || "auto", 
      }, props.center ? { alignItems: "center", justifyContent: "center" } : "" ]}>
         { props.children }
      </View>
   );
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
   w?: number | string;
   h?: number | string;
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




/* == [ exports ] == == == == == == == == == */
export default X;