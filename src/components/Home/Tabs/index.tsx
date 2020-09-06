import React from "react";
import { Route } from "react-router";
import { IonTabs, IonRouterOutlet, IonTabBar } from "@ionic/react";

interface TabsProps {
  selected: string;
  onChange: (selected: string) => void;
  tabNames: string[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { selected, onChange, tabNames, children } = props;
  
  return (
    <IonTabs onIonTabsWillChange={(e) => onChange(e.detail.tab)}>
      <IonRouterOutlet>
        {tabNames.map((tab) => (
          <Route key={tab} path={`/${tab}`} render={() => <></>} />
        ))}
      </IonRouterOutlet>
      <IonTabBar
        style={{ heigth: "56px" }}
        slot="bottom"
        selectedTab={selected}
      >
        {children}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
