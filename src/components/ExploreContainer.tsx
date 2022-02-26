import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
} from "@ionic/react";
import { useState } from "react";
import { useFirestore } from "../helpers/useFirestore";

const ExploreContainer = () => {
  const [newUser, setNewUser] = useState<string>();
  const { documents, addDocument, isLoading } = useFirestore("users");

  const addNewUser = () => {
    addDocument({ name: newUser }).then(() => {
      setNewUser("");
    });
  };

  return (
    <div className="container mx-auto">
      <IonCard>
        <IonCardTitle className="p-4">List of users</IonCardTitle>
        {isLoading ? (
          <IonSpinner />
        ) : (
          <IonList>
            {documents?.map((user, i) => (
              <IonItem key={i}>
                <IonLabel>{user.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonCard>
      <IonCard>
        <IonCardTitle className="p-4">Add new user</IonCardTitle>
        <IonItem>
          <IonLabel position="floating">Enter name</IonLabel>
          <IonInput
            value={newUser}
            type="text"
            onIonInput={(e: any) => setNewUser(e.target.value)}
          ></IonInput>
          <IonButton onClick={addNewUser}>Submit</IonButton>
        </IonItem>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
