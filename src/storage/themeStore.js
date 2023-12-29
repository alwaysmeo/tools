'use strict'
import { defineStore } from 'pinia'
import STORAGE_KEY from './storageKey'

const storeKey = STORAGE_KEY.THEME
export const useThemeStore = defineStore(storeKey, {
	state: () => ({
		theme: ''
	}),
	actions: {
		get() {
			return this.theme
		},
		set(value) {
			this.theme = value ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
			document.documentElement.setAttribute('theme', this.theme)
		},
		clear() {}
	},
	getters: {},
	persist: {
		enabled: true,
		strategies: [
			{
				key: storeKey,
				storage: localStorage
			}
		]
	}
})
