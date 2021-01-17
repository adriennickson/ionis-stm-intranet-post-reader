import React from 'react';
import { IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import PostsContainer from "../components/PostsContainer";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Documentation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">...</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent>
              <IonItem>
                  <IonAvatar slot="start">
                      <img src="assets/img/Channel.jpg" />
                  </IonAvatar>
                  <IonLabel>
                      <h2>DONKENG Channel</h2>
                      <h3>channel-laetitia.donkeng-donfack@ionis-stm.com</h3>
                      <p>M1 Info</p>
                  </IonLabel>
              </IonItem>
              <IonItem>
                  <IonAvatar slot="start">
                      <img src="assets/img/Lyna.jpg" />
                  </IonAvatar>
                  <IonLabel>
                      <h2>TAMOUD Lyna</h2>
                      <h3>lyna.tamoud@ionis-stm.com</h3>
                      <p>M1 Info</p>
                  </IonLabel>
              </IonItem>
              <IonItem>
                  <IonAvatar slot="start">
                      <img src="assets/img/Adrien.jpg" />
                  </IonAvatar>
                  <IonLabel>
                      <h2>MOMO Adrien Nickson</h2>
                      <h3>adrien-nickson.momo@ionis-stm.com</h3>
                      <p>M1 Info</p>
                  </IonLabel>
              </IonItem>
              <IonCardHeader>
                <IonCardTitle>A propos</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                        Pour la réalisation de ce projet, nous avons conçu une application Android qui permet aux étudiants
                        de IONIS-STM de pouvoir voir les différentes publications qui sont publiées sur l'intranet de l'école.
                        <br/>
                        Notre projet requête l'API de l'intranet (wordpress rest api) pour obtenir:
                        <ol>
                            <li>La liste des posts</li>
                            <li>La liste des catégories</li>
                            <li>La liste des Auteurs</li>
                         </ol>
                         Et à partir de ces données nous construsons les vues.
                        <br/>
                        Pour ce projet, nous avons utilisé un ensemble de composants tels que:  
                        <ul>
                            <li>IonTitle</li>
                            <li>IonLabel</li>
                            <li>IonItem</li>
                            <li>IonAvatar</li>
                            <li>IonToolbar</li>
                            <li>IonContent</li>
                            <li>IonHeader</li>
                            <li>IonCardTitle</li>
                            <li>IonCardHeader</li>
                            <li>ETC...</li>
                         </ul>           
             </IonCardContent>
          </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
