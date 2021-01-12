import React from 'react';
import {
    IonCheckbox,
    IonContent,
    IonHeader,
    IonInput,
    IonItem, IonItemOption, IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonPage, IonRadio,
    IonTitle,
    IonToggle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import PostsContainer from "../components/PostsContainer";

const Tab2: React.FC = () => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Publications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/*
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Les publications de l'école</IonTitle>
          </IonToolbar>
        </IonHeader>
        */}
        <PostsContainer />
      </IonContent>
    </IonPage>
  );
};
export default Tab2;
