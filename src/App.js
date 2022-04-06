import "./App.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebse.init";
import { useState } from "react";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvier = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const hanadeleGoogleSineIn = () => {
    signInWithPopup(auth, googleProvier)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  const handeleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handelSignOut}>Sign Out </button>
      ) : (
        <>
          <button onClick={hanadeleGoogleSineIn}>Google Sing In </button>
          <button onClick={handeleGithubSignIn}>Github Sign In</button>
        </>
      )}
      <h2>Name: {user.displayName}</h2>
      <p>Emali: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
