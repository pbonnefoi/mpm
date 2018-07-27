import Vue from 'vue'
import Vuex from 'vuex'
import masterpieces from '@/Masterpieces'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            all: []
        },
        actions: {
            getAllMasterpieces({ commit }) {
                masterpieces.getMasterpieces((masterpiece) => commit('setMasterpiece', masterpiece))
            },
            getSingleMasterpiece({ commit }, id) {
                masterpieces.getMasterpiece(id, (masterpiece) => commit('setMasterpiece', masterpiece))
            }
        },
        mutations: {
            setMasterpiece (state, masterpiece) {
                console.log('mutations')
                state.all = masterpiece
                console.log()
            },
        },
    })
}
