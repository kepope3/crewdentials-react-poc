import {
  IonCard,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
} from "@ionic/react";
import { useContext } from "react";
import { GlobalContext } from "../App";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";

const ExploreContainer = () => {
  const globalContext = useContext(GlobalContext);

  const [value, loading, error] = useCollectionData(
    collection(getFirestore(globalContext.firebaseApp), "users"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className="container mx-auto">
      <IonCard>
        <IonCardTitle className="p-4">List of users</IonCardTitle>
        {loading ? (
          <IonSpinner />
        ) : (
          <IonList>
            {value?.map((user, i) => (
              <IonItem key={i}>
                <IonLabel>{user.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
