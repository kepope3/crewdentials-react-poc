import {
  IonCard,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const globalContext = useContext(GlobalContext);
  const [users, setUsers] = useState<Array<any>>();

  useEffect(() => {
    globalContext.datastore.getUsers().then((users) => {
      setUsers(users);
    });
  }, [globalContext.datastore]);

  return (
    <div className="container mx-auto">
      <IonCard>
        <IonCardTitle className="p-4">List of users</IonCardTitle>
        <IonList>
          {users?.map((user, i) => (
            <IonItem key={i}>
              <IonLabel>{user.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
