

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   type ColorValue,
} from "react-native";
import { View } from "../céo";
import { createIconSet,
   AntDesign, Entypo, EvilIcons, Feather, 
   FontAwesome, FontAwesome5, FontAwesome6, 
   Fontisto, Foundation, Ionicons, 
   MaterialCommunityIcons, MaterialIcons, 
   Octicons, SimpleLineIcons, Zocial, 
} from "@expo/vector-icons";
// import { Icon } from "lucide-react-native";



/** == [ properties ]
 * == == == == == == == == == */
// type IconNames = keyof typeof Icon;
type IconProps = {
   pd?: number;
   ph?: number;
   pv?: number;
   bg?: ColorValue;
   color?: ColorValue;
   shadow?: ColorValue;
   family?: 
      "MaterialCommunityIcons" |
      "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | 
      "FontAwesome" | "FontAwesome5" | "FontAwesome6" | 
      "Fontisto" | "Foundation" | "Ionicons" | 
      "MaterialCommunityIcons" | "MaterialIcons" | 
      "Octicons" | "SimpleLineIcons" | "Zocial"
   ;
   name?: string;
   size?: number;
   w?: number;
   h?: number;
   ratio?: number;
   radius?: number;
   elevation?: number;
}

/** == [ exports ]
 * == == == == == == == == == */
export default function Icon( { ...props }: IconProps ) {
   return( 
      <View
         style={ [
            {
               padding: props.pd,
               paddingHorizontal: props.ph,
               paddingVertical: props.pv,
               backgroundColor: props.bg,
               width: props.w,
               height: props.h,
               aspectRatio: props.ratio,
               borderRadius: props.radius,
               elevation: props.elevation,
               shadowColor: props.shadow,
            },
         ] }
      >
         {
            props.family == "MaterialCommunityIcons" ? (
               <MaterialCommunityIcons name={ props.name || "react" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "MaterialIcons" ? (
               <MaterialIcons name={ props.name || "add-reaction" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "FontAwesome" ? (
               <FontAwesome name={ props.name || "film" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "FontAwesome5" ? (
               <FontAwesome5 name={ props.name || "address-card" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "FontAwesome6" ? (
               <FontAwesome6 name={ props.name || "9" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "AntDesign" ? (
               <AntDesign name={ props.name || "stepforward" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Entypo" ? (
               <Entypo name={ props.name || "add-user" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "EvilIcons" ? (
               <EvilIcons name={ props.name || "archive" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Ionicons" ? (
               <Ionicons name={ props.name || "add-circle" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Feather" ? (
               <Feather name={ props.name || "anchor" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Fontisto" ? (
               <Fontisto name={ props.name || "bower" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Foundation" ? (
               <Foundation name={ props.name || "align-left" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Octicons" ? (
               <Octicons name={ props.name || "apps" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "SimpleLineIcons" ? (
               <SimpleLineIcons name={ props.name || "user" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : props.family == "Zocial" ? (
               <Zocial name={ props.name || "skype" } size={ props.size || 24 } color={ props.color || "black" } />
            ) : <MaterialCommunityIcons name={ props.name || "react" } size={ props.size || 24 } color={ props.color || "black" } />
         }
      </View> 
   );
}  /*  </  Icon  >  */

/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;