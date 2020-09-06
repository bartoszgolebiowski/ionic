import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Favorite.css";

const Favorite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="favorite"></IonContent>
    </IonPage>
  );
};

export default Favorite;
