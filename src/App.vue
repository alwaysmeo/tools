<script setup>
	import { Translation } from './components'
	import { useThemeStore } from './storage/themeStore'

	const themeStore = useThemeStore()
	themeStore.set('dark')
</script>

<template>
	<router-view />
</template>

<style lang="scss">
	html[theme='dark'] {
		background-color: var(--color-dark);
	}

	html[theme='light'] {
		background-color: var(--color-light);
	}
</style>
