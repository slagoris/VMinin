<template>
  <span :class="{badge: true, primary: {type: 'done', type: 'active' }, danger: type === 'cancelled', warning: type === 'pending' }">
		{{ type === 'done' ? 'Завершено': type === 'cancelled' ? 'Отменено': type === 'pending' ? 'Выполняется': 'Активно' }}
	</span>
</template>
<script>
export  default {
	name: 'AppStatus',
	props: {
		type: String
	}
}
</script>
