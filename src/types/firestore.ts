import {
    DocumentSnapshot,
    FirestoreError,
    QuerySnapshot,
  } from "firebase/firestore";
  
  export interface IStreamObserver {
    next: (snapshot: QuerySnapshot | DocumentSnapshot) => void;
    error: (error: FirestoreError) => void;
    complete: () => void;
  }
  