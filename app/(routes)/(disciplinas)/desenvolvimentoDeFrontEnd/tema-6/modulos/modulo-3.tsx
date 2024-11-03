

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
export default function Modulo3View( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } center ph={24} pv={24}>
                  <Text darkColor={ Palette.dark.bar } h={3}>React com requisições HTPP/Ajax & React Hooks</Text>
               </Header>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
                  <Section pd={24}>
                     <List children={<>
                        <Text h={4} darkColor="#757"></Text>
                        <Text>{``}</Text>
                     </>}/>
                  </Section>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Bind e eventos</Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Elementos Visuais</Text>
                  </Header>
               </View>

{/* == [ section 3 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Ambiente do Visual Studio Code</Text>
                  </Header>
               </View>

{/* == [ section 4 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Hooks</Text>
                  </Header>
               </View>

{/* == [ section 5 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Acessando uma API</Text>
                  </Header>
               </View>

{/* == [ exercicios ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Atividades</Text>
                     </Header>

                     <Section gap={16}>
                        
                        <Exercices id={1}
                           question={<Text>O React é uma excelente biblioteca do JavaScript para desenvolvermos aplicações com recursos de interface com usuário (UI). No entanto, há outras formas de desenvolver aplicações semelhantes, inclusive, no próprio HTML. Nesse sentido, selecione a opção correta que justifica o uso do React em relação a outras linguagens e bibliotecas de desenvolvimento.</Text>}
                           answer={<Text>O React oferece recursos para o desenvolvedor ter maior controle e qualidade da aplicação.</Text>}
                        />
                        
                        <Exercices id={2}
                           question={<Text>O VS Code é uma ferramenta muito útil para desenvolver aplicações em diversas linguagens de programação, incluindo aplicações JavaScript com React. Ao abrirmos a pasta de uma aplicação, vemos diversos arquivos e subpastas. Nesse sentido, selecione a opção correta a respeito do arquivo responsável por registrar as dependências de uma aplicação no React.js.</Text>}
                           answer={<Text>As dependências estão registradas no arquivo package.json.</Text>}
                        />
                        
                        <Exercices id={3}
                           question={<Text>{`O Hooks surgiu no React para permitir a utilização dos estados e de outros recursos sem a necessidade de criar classes. Analise as afirmativas a seguir em relação à utilização de Hooks em nossas aplicações:

I. Hooks são funções que lhe permitem “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais.
II. O useState é chamado de dentro de um componente de classe para adicionar states locais a ele.
III. O useState possui mais de um argumento que é basicamente o estado inicial que queremos atualizar mais tarde com setState.

Está correto o que se afirma em:`}</Text>}
                           answer={<Text>1 e 2.</Text>}
                        />
                        
                        <Exercices id={1}
                           question={<Text></Text>}
                           answer={<Text></Text>}
                        />
                        
                     </Section>
                  </View>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo3View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */