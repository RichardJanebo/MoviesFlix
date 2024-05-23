import { createStore } from 'vuex';
import { auth, db } from '../firebaseConfig'; // Firebase configuration
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import firestore functions

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  actions: {
    async register({ commit }, { name, email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save additional user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          name,
          email,
        });
        
        commit('setUser', user);
      } catch (error) {
        console.error("Error registering:", error);
        throw error;
      }
    },
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        console.error("Error logging in:", error);
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('logout');
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  }
});

export default store;
