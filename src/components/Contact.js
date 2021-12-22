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
  const [firstName, setNewFirstName] = useState("");
  const [lastName, setNewLastName] = useState("");
  const [email, setNewEmail] = useState("");
  const [phone, setNewPhone] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { first: firstName, last: lastName, email: email, phone:phone  });
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
      <h1>Contact</h1>
      <input
        placeholder="first"
        onChange={(event) => {
          setNewFirstName(event.target.value);
        }}
      />
      <br/>
      <input
        placeholder="last"
        onChange={(event) => {
          setNewLastName(event.target.value);
        }}
      />
      <br/>
      <input
        placeholder="email"
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <br/>
      <input
        placeholder="phone"
        onChange={(event) => {
          setNewPhone(event.target.value);
        }}
      />
      <br/>
      <button onClick={createUser}> submit</button>
      
    </div>
  );
}

export default Contact;