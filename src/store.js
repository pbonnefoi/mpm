import Vue from 'vue'
import Vuex from 'vuex'
import { getMasterpiece } from '@/Masterpieces'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            masterpiece: []
        },
        actions: {
            getSingleMasterpiece({ commit }) {
                getMasterpiece(masterpiece => {
                    commit('setMasterpiece', masterpiece)
                })
            }
        }
    })
}
