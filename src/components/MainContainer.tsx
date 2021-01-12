import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { IonThumbnail, IonImg } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <IonCard>
            <IonImg src="https://www.ionis-stm.com/Content/images/design/logo-ionis-stm.png" />
            <IonCardHeader>
                <IonCardTitle>Publications reader</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Une simple application qui permet aux étudiants de l’école de rapidement consulter les publications de l’intranet.
            </IonCardContent>
        </IonCard>
    </div>
  );
};

export default MainContainer;
