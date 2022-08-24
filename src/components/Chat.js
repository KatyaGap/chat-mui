import { Avatar, Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import {
  useAuthState,
} from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import { AuthContext } from './Context/Context';

import Loader from './Loader';

function Chat() {
  const { auth, firestore } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const [input, setInput] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid
        container
        justify={'center'}
        style={{ height: window.innerHeight - 70, marginTop: 20 }}
      >
        <div
          style={{
            width: '80%',
            height: '70vh',
            border: '1px solid gray',
            overflowY: 'auto',
          }}
        >
          {messages.map((message) => (
            <div
              key={message.text}
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? '2px solid blue'
                    : '2px solid green',
                borderRadius: 10,
                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                width: 'fit-content',
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '80%' }}
        >
          <TextField
            fullWidth
            rowmax={2}
            variant={'outlined'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={sendMessage} variant={'outlined'}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;
