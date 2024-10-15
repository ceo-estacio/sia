

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text, 
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function YouTubePlayer( { ...props } ) {


   return( <>
      <YoutubePlayer 
         height={300}
         play={true}
         videoId="mLI_QxszYrU"
      />
   </> );
}  /*  </  YouTubePlayer  >  */


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