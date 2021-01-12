import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
          </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
