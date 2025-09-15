// import { auth, provider, storage } from "../firebase";
// import db from "../firebase";
import { SET_CURRENT_USER } from "./actionType";
import { auth, createUserProfileDocument } from "../firebase";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// export function signInApi() {
//   return (dispatch) => {
//     auth
//       .signInWithPopup(provider)
//       .then((payload) => {
//         // console.log(payload);
//         dispatch(setUser(payload.user));
//       })
//       .catch((error) => alert(error.message));
//   };
// }

export function getUserAuth() {
  return (dispatch) => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            );
          });
        } else {
          dispatch(setCurrentUser(null));
        }
      }
    });
    return unsubscribeFromAuth;
  };
}

export const signOutApi = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.error(error.message);
    }
  };
};

// export function postArticleApi(payload) {
//   return (dispatch) => {
//     if (payload.image !== "") {
//       const upload = storage
//         .ref(`images/${payload.image.name}`)
//         .put(payload.image);
//       upload.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//           console.log(`progress: ${progress}%`);
//           if (snapshot.state === "RUNNING") {
//             console.log(`progress: ${progress}%`);
//           }
//         },
//         (error) => console.log(error.code),
//         async () => {
//           const downloadURL = await upload.snapshot.ref.getDownloadURL();
//           db.collection("articles").add({
//             actor: {
//               description: payload.user.email,
//               title: payload.user.displayName,
//               date: payload.timestamp,
//               image: payload.user.photoURL,
//             },
//             video: payload.video,
//             sharedImg: downloadURL,
//             comments: 0,
//             description: payload.description,
//           });
//         }
//       );
//     }
//   };
// }
