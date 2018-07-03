import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store( {
    state: {
        counter: 0
    },
    getters: {
        clickCounter: state => {
            return state.counter;
        }
    },
    mutations: {
        increment: state => {
            return state.counter++;
        },
        decrement: state => {
            return state.counter--;
        }
    }
} );