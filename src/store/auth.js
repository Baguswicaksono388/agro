import axios from 'axios';

export default {
    namespaced: true,
    state: {
        //
        token: null,
        user: null,
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user
        }
    },

    mutations: {
        //
        SET_TOKEN(state, token) {
            state.token = token;
          },
          SET_USER(state, data) {
            state.user = data;
          },
    },
    actions: {
        async signIn( { dispatch } , credentials) {
            // console.log(credentials.token);
            return dispatch('attempt', credentials.token);
        },

        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return 
            }

            try {
                // let response = await axios.get("http://localhost:8000/api/auth/me", {
                //     headers: {'Authorization' : 'Bearer' + token}
                // });
                let response = await axios.get("http://localhost:8000/api/auth/me");
                // console.log(response.data)
                
                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        async signOut({ commit }) {
            await axios.post('http://localhost:8000/api/auth/signout');
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        }
    }
}