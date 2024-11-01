

/** == [ @imports ] 
 * == == == == == == == == == */
import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content,
   PixBG,
   Exercices,
   List,
} from "@/widgets/elements";
import React, { useState, useEffect,  } from "react";
import { 
   StyleSheet,
   ScrollView,
   Alert,
   ActivityIndicator,
} from "react-native";
import YouTube from "react-native-youtube-iframe";
import YouTubePlayer from "@/widgets/céo/YouTubePlayer";
import { Palette } from "@/constants/Colors";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaBásicaDoVueJS( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } center ph={24} pv={24}>
                  <Text darkColor={ Palette.dark.bar } h={3}>Angular</Text>
               </Header>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Introdução</Text>
                  </Header>
                  <Section pd={24}>
                     <List children={<>
                        <Text h={4} darkColor="#757">Instalação</Text>
                        <Text>{`npm install -g @angular/cli`}</Text>
                     </>}/>

                     <List children={<>
                        <Text h={4} darkColor="#757">Criação de um projeto</Text>
                        <Text>{`ng new projectName\nRouting? No\nStylesheet? CSS`}</Text>
                     </>}/>

                     <List>
                        <Text h={4} darkColor="#757">Starting project</Text>
                        <Text>{`cd projectName\nng serve --open`}</Text>
                     </List>

                     <List>
                        <Text h={4} darkColor="#757">Starting project</Text>
                        <Text>{`cd projectName\nng serve --open`}</Text>
                     </List>

                     <List>
                        <Text h={4} darkColor="#757">app.module.ts</Text>
                        <Text>{`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }`}</Text>
                     </List>
                  </Section>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Arquitetura do framework Angular</Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Linguagem TypeScript</Text>
                  </Header>
               </View>

{/* == [ section 3 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Roteamento no Angular</Text>
                  </Header>
               </View>

{/* == [ section 4 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Projeto PrimeiroApp</Text>
                  </Header>
               </View>

{/* == [ section 5 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Projeto SegundoApp</Text>
                  </Header>
               </View>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  EstruturaBásicaDoVueJS  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */