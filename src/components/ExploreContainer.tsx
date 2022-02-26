import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { useState } from "react";
import { sortByPropery } from "../helpers/sorting";
import { useFirestore } from "../helpers/useFirestore";

const ExploreContainer = () => {
  const [newUser, setNewUser] = useState<string>();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isAsc, setIsAsc] = useState<boolean>(true);

  const { documents: users, addDocument, isLoading } = useFirestore("users");

  const addNewUser = () => {
    if (newUser) {
      addDocument({ name: newUser }).then(() => {
        setNewUser("");
      });
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className="container mx-auto">
      <IonCard>
        <IonCardTitle className="p-4">List of users</IonCardTitle>
        {isLoading ? (
          <IonSpinner />
        ) : (
          <>
            <IonItem>
              <IonLabel>Sort by</IonLabel>
              <IonSelect
                value={isAsc}
                onIonChange={(e: any) => setIsAsc(e.target.value)}
              >
                <IonSelectOption value={true}>asc</IonSelectOption>
                <IonSelectOption value={false}>dsc</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonList className="h-60 max-h-full overflow-auto">
              {sortByPropery(users, isAsc)?.map((user, i) => (
                <IonItem key={i}>
                  <IonLabel>{user.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </>
        )}
      </IonCard>
      <IonCard>
        <IonCardTitle className="p-4">Add new user</IonCardTitle>
        <IonItem>
          <IonLabel position="floating">Enter name</IonLabel>
          <IonInput
            value={newUser}
            type="text"
            onKeyUp={(e: any) => {
              if (e.code === "Enter") {
                addNewUser();
              }
            }}
            onIonInput={(e: any) => {
              setNewUser(e.target.value);
            }}
          ></IonInput>
          <IonButton onClick={addNewUser}>Submit</IonButton>
        </IonItem>
      </IonCard>
      <IonToast
        isOpen={showToast}
        duration={1000}
        onDidDismiss={() => setShowToast(false)}
        message="Please enter a name"
        animated={true}
        color="danger"
      ></IonToast>
    </div>
  );
};

export default ExploreContainer;
