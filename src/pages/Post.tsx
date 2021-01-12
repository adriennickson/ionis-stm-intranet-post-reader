import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import PostsContainer from "../components/PostsContainer";
import {RouteComponentProps} from "react-router";
interface PostDetailPageProps extends RouteComponentProps<{
    id: string;
}> {}

const Post: React.FC<PostDetailPageProps> = ({match}) => {
    const [data, setData] = useState({title: {rendered: "Chargement..."}, content: {rendered: "", protected: false}, link: ""});
    useEffect(() => {

        async function loadData() {
            const loadedData = fetch("https://intranet.ionis-stm.io/wp-json/wp/v2/posts/"+match.params.id)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        return result
                    },
                    (error) => {
                        return {title: {rendered: "Erreur de connection!"}, content: {rendered: "", protected: false}, link: ""}
                    }
                )
            ;
            let data = await loadedData;
            setData(data);
        }

        loadData();
    }, []);
    const item = (data || null);
    let contenu = <div></div>
    if (item?.content?.rendered?.length > 0) {
        contenu =
            <IonCard>
                <IonCardContent>
                    <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                </IonCardContent>
            </IonCard>
        // button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else if(item?.title?.rendered !== "Chargement...") {
        contenu =
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Vous ne pouvez accéder à ce contenu que si vous êtes connecté sur l'intranet!</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonCardContent>
                        <IonButton fill="outline" slot="end" href={item?.link} target="_blank" >Allez sur le site</IonButton>
                    </IonCardContent>
                </IonCardContent>
            </IonCard>
    }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <span dangerouslySetInnerHTML={{ __html: item ? item["title"]["rendered"] : "" }}></span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">...</IonTitle>
          </IonToolbar>
        </IonHeader>
          <div>
              {contenu}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Post;
