Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return {
		counter:0
	}
  }
})
new Vue({
  el: '#example-2'
})
Vue.component('child',{
	props:{
		myMessage:{
			type:[Number,String],
			required:true
		}
	},
	template:'<span>{{dealtMsg}}</span>',
	data:function(){
		return {localMsg:this.myMessage}
	},
	computed:{
		dealtMsg:function(){
			return this.localMsg.trim().toLowerCase();
		}
	}
})
new Vue({
	el:'#example-3',
	data:{
		parentMsg:'Hello Vue'
	}
})
Vue.component('button-counter',{
	template:'<button @click="increment">{{counter}}</button>',
	data:function(){
		return {
			counter:0
		}
	},
	methods:{
		increment:function(){
			this.counter += 1;
			this.$emit('increment')
		}
	}
})
new Vue({
	el:'#counter-event-example',
	data:{
		total:0
	},
	methods:{
		incrementTotal:function(){
			this.total += 1
		},
		aa:function(){
			console.log('xixi');
		}
	}
})


// Vue.component('select2', {
  // props: ['options', 'value'],
  // template: '#select2-template',
  // mounted: function () {
    // var vm = this
    // $(this.$el)
      // .val(this.value)
      // // init select2
      // .select2({ data: this.options })
      // // emit event on change.
      // .on('change', function () {
        // vm.$emit('input', this.value)
      // })
  // },
  // watch: {
    // value: function (value) {
      // // update value
      // $(this.$el).select2('val', value)
    // },
    // options: function (options) {
      // // update options
      // $(this.$el).select2({ data: options })
    // }
  // },
  // destroyed: function () {
    // $(this.$el).off().select2('destroy')
  // }
// })

// var vm = new Vue({
  // el: '#el',
  // template: '#demo-template',
  // data: {
    // selected: 0,
    // options: [
      // { id: 1, text: 'Hello' },
      // { id: 2, text: 'World' }
    // ]
  // }
// })