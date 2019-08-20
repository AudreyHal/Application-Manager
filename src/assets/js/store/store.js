import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
			applications:[],
			totalClaimsAmount: '',
			totalInsuranceAmount: '',
			totalInsurancesBought: '',
			totalInsuranceClaims: ''
		},
		mutations: {
			change_applications(state, applications) {
				state.applications = applications
			},
			change_totalClaimsAmount(state, totalClaimsAmount) {
				state.totalClaimsAmount = totalClaimsAmount
			},
			change_totalInsuranceAmount(state, totalInsuranceAmount) {
				state.totalInsuranceAmount = totalInsuranceAmount
			},
			change_totalInsurancesBought(state, totalInsurancesBought) {
				state.totalInsurancesBought = totalInsurancesBought
			},
			change_totalInsuranceClaims(state, totalInsuranceClaims) {
				state.totalInsuranceClaims = totalInsuranceClaims
			}
		
	},

		getters: {
			applications: state => state.applications,		
			totalClaimsAmount: state => state.totalClaimsAmount,
			totalInsuranceAmount: state => state.totalInsuranceAmount,
			totalInsurancesBought: state => state.totalInsurancesBought,
			totalInsuranceClaims: state => state.totalInsuranceClaims
		}
	
	})