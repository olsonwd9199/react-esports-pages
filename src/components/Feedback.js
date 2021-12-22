import { useState, useEffect } from "react";
import { db } from "./Firestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { Component }  from 'react';

function Contact() {
  const [email, setNewEmail] = useState("");
  const [feedback, setNewFeedback] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "feedback");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: email, feedback: feedback});
  };

  

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Feedback</h1>
      <input
        placeholder="email"
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <br/>
      <input
        placeholder="feedback"
        onChange={(event) => {
          setNewFeedback(event.target.value);
        }}
      />
      <br/>
      <button onClick={createUser}> submit</button>
      
    </div>
  );
}

export default Contact;