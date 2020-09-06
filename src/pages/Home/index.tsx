import React, { useState, useRef, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { IonSlide, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { heart, home, mail } from "ionicons/icons";

import Tabs from "../../components/Home/Tabs";
import Sliders from "../../components/Home/Sliders";

import Favorite from "./Favorite/Favorite";
import Messages from "./Messages/Messages";
import Home from "./Home/Home";

const TAB_NAMES = ["favorite", "home", "messages"];

const numberToTab: any = {
  0: "favorite",
  1: "home",
  2: "messages",
};

const tabToNumber: any = {
  favorite: 0,
  home: 1,
  messages: 2,
};

const HomePage: React.FC<RouteComponentProps> = (props) => {
  const ref = useRef<HTMLIonSlidesElement | null>(null);
  const [selected, setSelected] = useState(1);

  const onChange = (currentIndex: string) => {
    if (ref?.current != null) {
      ref?.current.slideTo(tabToNumber[currentIndex]);
      setSelected(tabToNumber[currentIndex]);
    }
  };

  useEffect(() => {
    props.history.push(`/${numberToTab[selected]}`);
  }, [props.history, selected]);

  return (
    <>
      <Sliders ref={ref} setSelected={setSelected}>
        <IonSlide>
          <Favorite />
        </IonSlide>
        <IonSlide>
          <Home />
        </IonSlide>
        <IonSlide>
          <Messages />
        </IonSlide>
      </Sliders>
      <Tabs
        tabNames={TAB_NAMES}
        selected={numberToTab[selected]}
        onChange={onChange}
      >
        <IonTabButton tab="favorite" href="/favorite">
          <IonIcon icon={heart} />
          <IonLabel>Favorite</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="messages" href="/messages">
          <IonIcon icon={mail} />
          <IonLabel>Messages</IonLabel>
        </IonTabButton>
      </Tabs>
    </>
  );
};

export default withRouter(HomePage);
