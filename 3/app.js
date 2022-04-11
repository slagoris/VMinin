Vue.createApp({
	data: () => ({
		title: 'Я есть Грут',
		myHtml: '<h1>VUE 3 App</h1>',
		person: {
			firstName: 'Alex',
			lastName: 'G',
			age: 37,
		},
		items: [1, 2, 3, 4, 5, 6]
	}),
	methods: {
		addItem() {
			this.items.unshift( this.$refs.myInput.value )
			this.$refs.myInput.value = ''
		},
	},
	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	},
}).mount('#app')
