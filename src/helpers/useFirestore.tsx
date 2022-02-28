import {
  addDoc,
  collection,
  DocumentReference,
  onSnapshot,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";

export const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState<Array<any>>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const existingCollection = collection(globalContext.db, collectionName);
    const unsubscribe = onSnapshot(
      existingCollection,
      (snapshot) => {
        const docData: Array<any> = snapshot.docs.map((queryDocSnapshot) =>
          queryDocSnapshot.data()
        );
        setDocuments(docData);
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );

    return () => unsubscribe();
  }, []);

  const addDocument = async (
    newDocument: any
  ): Promise<DocumentReference<any>> => {
    const existingCollection = collection(globalContext.db, collectionName);
    return addDoc(existingCollection, newDocument);
  };

  return { documents, addDocument, isLoading };
};
