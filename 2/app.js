Vue.createApp({
	data() {
		return {
			title: 'Список заметок',
			placeholderString: 'Введите название',
			inputValue: '',
			notes: ['Заметка 1', 'Заметка 2'],
		}
	},
	methods: {
		addNote() {
			if (this.inputValue) {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},

		removeNote(index, event){
			this.notes.splice(index, 1)
		},
	},
	computed: {
		double() {
			console.log('double')
			return this.notes.length * 2
		},
	},
	watch: {
		inputValue(value) {
			console.log(value)
		}
	}
}).mount('#app')
