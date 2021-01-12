import React, {useEffect, useState} from 'react';
import './PostsContainer.css';
import {IonItem, IonLabel, IonList } from "@ionic/react";
import { IonButtons, IonButton, IonIcon, IonDatetime, IonBadge } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';

interface ContainerProps {}

const PostsContainer: React.FC<ContainerProps> = ({ }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        async function loadData() {
            const loadedCategories = fetch("https://intranet.ionis-stm.io/wp-json/wp/v2/categories?per_page=100")
                .then(res => res.json())
                .then(
                    (result) => {
                        return result
                    },
                    (error) => {
                        return []
                    }
                )
            ;
            let categories = await loadedCategories;

            const loadedAutors = fetch("https://intranet.ionis-stm.io/wp-json/wp/v2/users?per_page=100&_embed")
                .then(res => res.json())
                .then(
                    (result) => {
                        return result
                    },
                    (error) => {
                        return []
                    }
                )
            ;
            let autors = await loadedAutors;
            console.log(autors);
            const loadedData = fetch("https://intranet.ionis-stm.io/wp-json/wp/v2/posts?per_page=100")
                .then(res => res.json())
                .then(
                    (result) => {
                        // console.log(result)
                        return result
                    },
                    (error) => {
                        return []
                    }
                )
            ;

            let data = await loadedData;
            data = data.map( (el: any) => {
                let autor = autors.filter( (a: { id: any; name: any }) => a.id === el["author"])
                let postCategoies = categories.filter( (a: { id: any; categories: any[] }) => el["categories"].includes(a.id))
                let categoriesJSON = <p>
                    {postCategoies.map( (category: any)  => {
                        return  <IonBadge id={category["id"]}>{category["name"]}</IonBadge>
                    })} &nbsp;
                </p>
                let eyeButton = null
                if (el.content.rendered.length > 0)
                    eyeButton = <IonIcon slot="end" icon={eye} />
                else
                    eyeButton = <IonIcon slot="end" icon={eyeOff} />
                return {...el, ...{autorName: autor[0]["name"], categoriesJSON, eyeButton}}
            } )

            console.log(data)
            setData(data);
        }

        loadData();
    }, []);


    const items = (data || []);

    return (
        <div className="container">
            {/*-- List of Text Items --*/}
            <IonList >
                {items.map( value  => {
                    return <IonItem key={value['id']} href={"/post/"+value['id']}>
                        <IonLabel>
                            <h2 dangerouslySetInnerHTML={{ __html: value["title"]["rendered"] }}></h2>
                            <h5>{value['autorName']}</h5>
                            <IonDatetime disabled displayFormat="DDDD MMM D, YYYY -- HH:mm" value={value['date']}></IonDatetime>
                            {value['categoriesJSON']}
                        </IonLabel>
                        <IonButtons slot="end">
                            <IonButton shape="round">
                                {value['eyeButton']}
                            </IonButton>
                        </IonButtons>
                    </IonItem>
                })}
            </IonList>
        </div>
  );
};

export default PostsContainer;
