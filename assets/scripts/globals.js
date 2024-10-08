

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
'use strict';
/* == [ properties ] == == == == == == == == == */
const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...v ) => console.log( ...v );
/* -------------------------------- */

/**
 * firebase config
 * == == == == == == == == == */
const firebaseConfig = {
   apiKey: "AIzaSyD2eZD6WyD0oasjWTMHvzKcOO6sIWfvikY",
   authDomain: "ceo-estacio-sia.firebaseapp.com",
   databaseURL: "https://ceo-estacio-sia-default-rtdb.firebaseio.com",
   projectId: "ceo-estacio-sia",
   storageBucket: "ceo-estacio-sia.appspot.com",
   messagingSenderId: "763568524386",
   appId: "1:763568524386:web:f402d3f2d2d77f9b29953b"
};

const app = initializeApp(firebaseConfig);
import {
   getDatabase, ref, get, child, set, update, remove
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const 
   db = getDatabase()
;
/**
 * firebase rtdb crud
 * == == == == == == == == == */
// create
const 
   firebase = {
      rtdb: {
         crud: {
            Create: async ( { path, odata, } ) => {
               set(
                  ref(
                     getDatabase(),
                     path  
                     // `EmployeeSet/${ cnic_.value }`
                  ),
                  odata    
                  /* { 
                     // object
                     nameofemployee: { 
                        firstname: firstName_.value, 
                        lastname: lastName_.value 
                     }, 
                     // string
                     department: department_.value,
                     // bool
                     canswin: ( canSwin_.value == "yes" ),
                     // number
                     cnic: Number( cnic_.value )
                  } */
               ).then( () => {
                  _( "Crud:: Create(): data created successfully" );
               } ).catch( err => _( "Crud:: Create() err: ", err ) );
            }
            ,
            Read: async ( { path, } ) => {
               const data = 
               get(
                  child(
                     ref( getDatabase() ),
                     path
                  )
               )
               // .then( snapshot => {
               //    if( snaphost.exists() ) {
               //       firstName_.value = snapshot.val().nameofemployee.firstname;
               //       lastName_.value = snapshot.val().nameofemployee.lastname;
               //       department_.value = snapshot.val().department;
               //       canSwin_.value = ( snapshot.val().canswin ) ? "yes" : "no";
               //    } else { _( "Employee doesn't exist" ); }
               // } ).catch( err => _( "crud:: Read() err: ", err ) );
               return data;
            }
            ,
            Update: async ( { path, odata, } ) => {
               update(
                  ref(
                     getDatabase(),
                     path  
                  ),
                  odata    
               ).then( () => {
                  _( "Crud:: Update(): data updated successfully" );
               } ).catch( err => _( "Crud:: Update() err: ", err ) );
            }
            ,
            Delete: async ( { path, } ) => {
               remove(
                  ref(
                     getDatabase(),
                     path  
                  )   
               ).then( () => {
                  _( "Crud:: Delete(): data deleted successfully" );
               } ).catch( err => _( "Crud:: Delete() err: ", err ) );
            }
            ,
         }
      }
   }
;

/* firebase rtdb crud -- -- -- -- -- -- -- -- -- */

function EventListener( { element, event, eventRunner, } ) {
   if( $( element ) ) {
      $( `${ element }` ).addEventListener( 
         `${ event }`, 
         () => eventRunner() 
      );
   }
}

function LoadNavlinks() {
   let NavLinks = $$( 'navlink' );

   NavLinks.forEach( link => link.addEventListener( 'click', ev => {
      window.open( link.getAttribute( 'to' ), '_blank' );
   } ) );
}

const 
   icons = {
      sia: `
         <svg viewBox="0 0 24 24" class="archive" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 3C0.25 2.58579 0.585786 2.25 1 2.25H23C23.4142 2.25 23.75 2.58579 23.75 3V8C23.75 8.41421 23.4142 8.75 23 8.75H21.75V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8.75H1C0.585786 8.75 0.25 8.41421 0.25 8V3ZM3.75 8.75V20.25H20.25V8.75H3.75ZM1.75 7.25V3.75H22.25V7.25H1.75ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg>
      `,
      sava: `
         <svg viewBox="0 0 24 25" class="grid" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.51758C2.25 3.10336 2.58579 2.76758 3 2.76758H10C10.4142 2.76758 10.75 3.10336 10.75 3.51758V10.5176C10.75 10.9318 10.4142 11.2676 10 11.2676H3C2.58579 11.2676 2.25 10.9318 2.25 10.5176V3.51758ZM3.75 4.26758V9.76758H9.25V4.26758H3.75ZM13.25 3.51758C13.25 3.10336 13.5858 2.76758 14 2.76758H21C21.4142 2.76758 21.75 3.10336 21.75 3.51758V10.5176C21.75 10.9318 21.4142 11.2676 21 11.2676H14C13.5858 11.2676 13.25 10.9318 13.25 10.5176V3.51758ZM14.75 4.26758V9.76758H20.25V4.26758H14.75ZM2.25 14.5176C2.25 14.1034 2.58579 13.7676 3 13.7676H10C10.4142 13.7676 10.75 14.1034 10.75 14.5176V21.5176C10.75 21.9318 10.4142 22.2676 10 22.2676H3C2.58579 22.2676 2.25 21.9318 2.25 21.5176V14.5176ZM3.75 15.2676V20.7676H9.25V15.2676H3.75ZM13.25 14.5176C13.25 14.1034 13.5858 13.7676 14 13.7676H21C21.4142 13.7676 21.75 14.1034 21.75 14.5176V21.5176C21.75 21.9318 21.4142 22.2676 21 22.2676H14C13.5858 22.2676 13.25 21.9318 13.25 21.5176V14.5176ZM14.75 15.2676V20.7676H20.25V15.2676H14.75Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg>
      `,
      avaliações: `
         <svg viewBox="0 0 24 24" class="check_square" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H16C16.4142 2.25 16.75 2.58579 16.75 3C16.75 3.41421 16.4142 3.75 16 3.75H5ZM22.5303 3.46967C22.8232 3.76256 22.8232 4.23744 22.5303 4.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L12 12.9393L21.4697 3.46967C21.7626 3.17678 22.2374 3.17678 22.5303 3.46967Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg>
      `,
   }
   ,
   drawerMenuItems = [
      {
         name: "sia",
         link: "https://sia.estacio.br/sianet/",
         icon: icons.sia,
      }
      ,
      {
         name: "sava",
         link: "https://estudante.estacio.br/?utm_source=sia&utm_medium=menu-lateral&utm_campaign=2021&force_login=true&login_hint=202309568098@alunos.estacio.br",
         icon: icons.sava,
      }
      ,
      {
         name: "avaliações",
         link: "https://estudante.estacio.br/avaliacoes",
         icon: icons.avaliações,
      }
      ,
   ]
;

function LoadDrawerMenu() {
   if( drawer ) {
      drawer.innerHTML = `
         <drawer-body id="drawerBody">
            <style>
               drawer {
                  display: flex;
                  width: clamp( 100px, 75%, 300px );
                  width: 0;
                  overflow-x: hidden;
                  position: fixed;
                  top: 0; left: 0;
                  padding-top: 126px;
                  // z-index: 99;
                  box-shadow: #0003 0 0 10px;
               }

               drawer-body {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  gap: 1em;
                  padding: 1em;
               }

               drawer-item {
                  display: flex;
                  width: 100%;
                  align-items: center;
                  gap: .5em;
                  padding: .5em;
                  background-color: #5e5e5e;
                  border-radius: .5em;
               }

               drawer-item > icon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 1.5em;
                  height: 1.5em;
                  aspect-ratio: 1 / 1;
               }

               drawer-item > icon > svg {
                  width: 100%;
                  height: 100%;
               }

               navlink {
                  width: 100%;
               }
            </style>
         </drawer-body>
      `,
      drawerMenuItems.forEach( item => {
         drawerBody.innerHTML += `
            <drawer-item>
               <icon>
                  ${ item.icon }
               </icon>
               <navlink
                  to="${ item.link }"
               >
                  ${ item.name }
               </navlink>
            </drawer-item>
         `
      } );
      LoadNavlinks();
      
   }
}



/* == [ events ] == == == == == == == == == == */
window.addEventListener( 'load', ev => { 
   let 
      drawerObserver = localStorage.getItem( "drawerObserver" ) ? true : false
   ;

   LoadNavlinks(); 
   LoadDrawerMenu(); 
         
   drawerObserver ? (
      drawer.style.width = "clamp( 100px, 75%, 300px )"

   ) : (
      drawer.style.width = "0"
   );

   // create_btn 
   EventListener( { 
      element: "#create_Btn", 
      event: "click", 
      eventRunner: () => {
         firebase.rtdb.crud.Create( {
            path: `EmployeeSet/${ cnic_.value }`,
            odata: { 
               nameofemployee: { 
                  firstname: firstName_.value, 
                  lastname: lastName_.value 
               }, 
               department: department_.value, 
               canswin: ( canSwin_.value == "yes" ), 
               cnic: Number( cnic_.value ) 
            },
         } ); 
      }
   } ); 
   // read_btn
   EventListener( { 
      element: "#read_Btn", 
      event: "click", 
      eventRunner: () => {
         firebase.rtdb.crud.Read( {
            path: `EmployeeSet/${ cnic_.value }`
         } ).then( snapshot => {
            if( snapshot.exists() ) {
               firstName_.value = snapshot.val().nameofemployee.firstname;
               lastName_.value = snapshot.val().nameofemployee.lastname;
               department_.value = snapshot.val().department;
               canSwin_.value = ( snapshot.val().canswin ) ? "yes" : "no";
               _( "oi" );
            } else { _( "Employee doesn't exist" ); }
         } ).catch( err => _( "crud:: Read() err: ", err ) );
      }
   } );

   // update_btn
   EventListener( { 
      element: "#update_Btn", 
      event: "click", 
      eventRunner: () => {
         firebase.rtdb.crud.Update( {
            path: `EmployeeSet/${ cnic_.value }`,
            odata: { 
               nameofemployee: { 
                  firstname: firstName_.value, 
                  lastname: lastName_.value 
               }, 
               department: department_.value,
               canswin: ( canSwin_.value == "yes" ),
            },
         } );
      }
   } );

   // delete_btn
   EventListener( { 
      element: "#delete_Btn", 
      event: "click", 
      eventRunner: () => { 
         firebase.rtdb.crud.Delete( { 
            path: `EmployeeSet/${ cnic_.value }`
         } );
      }
   } );

   EventListener( {
      element: "#drawerToggle_Btn",
      event: "click",
      eventRunner: () => {
         drawerObserver = !drawerObserver;
         
         drawerObserver ? (
            localStorage.setItem( "drawerObserver", true )
            ,
            drawer.style.width = "clamp( 100px, 75%, 300px )"

         ) : (
            localStorage.removeItem( "drawerObserver" )
            ,
            drawer.style.width = "0"
         );
      }
   } );
} );
