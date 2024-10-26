

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import YouTube from "react-native-youtube-iframe";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function YouTubePlayer( { ...props }: { videoID: string; } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <YouTube 
         videoId={ props.videoID || "0GOUF8vNqzE" } 
         height={ VideoReady ? videoHeight : 0 }
         onReady={ () => { setVideoReady( true ) } }
      />
      {
         !VideoReady && 
         <ActivityIndicator color={ "#f55" } style={{ height: videoHeight, position: "relative", top: "50%", }}/>
      }
   </> );
}  /*  </  YouTubePlayer  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */