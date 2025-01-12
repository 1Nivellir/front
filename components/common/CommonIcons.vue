<template>
 	<component
		:is="iconComponent"
		:fill="fill"
		:width="width"
		:height="height"
	/>
</template>

<script lang="ts" setup>
const props = defineProps<{
  iconName:string
  fill?:string
  width?:string
  height?:string
}>()
const iconComponent = defineAsyncComponent(() => import(`~/components/icons/${props.iconName}.vue`))
</script>

<style>

</style>