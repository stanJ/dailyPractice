var app = new Vue({
	el:'#app',
	data:{
		message:'Hello Vue!'
	}
})
var app2 = new Vue({
	el:'#app-2',
	data:{
		message:'You loaded this page on ' + new Date()
	}
})
var app3 = new Vue({
	el:'#app-3',
	data:{
		seen:true
	}
})
var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})
var app5 = new Vue({
	el:'#app-5',
	data:{
		message:'Hello Vue.js!'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
})
var app6 = new Vue({
	el:'#app-6',
	data:{
		message:'Hello Vue!'
	}
})
Vue.component('todo-item',{
	props:['todo'],
	template:'<li><span>你妹</span>{{todo.text}}<span>你妹的</span></li>'
})
var app7 = new Vue({
	el:'#app-7',
	data:{
		groceryList: [
			{ text: 'Vegetables' },
			{ text: 'Cheese' },
			{ text: 'Whatever else humans are supposed to eat' }
		]
	}
})
var vm = new Vue({
	el:'#example',
	data:{
		message:'Hello'
	},
	computed:{
		reversedMessage:function(){
			return this.message.split('').reverse().join('');
		}
	},
	methods:{
		reverseMessage:function(){
			return this.message.split('').reverse().join('');
		}
	}
})
var watchExampleVM = new Vue({
	el:'#watch-example',
	data:{
		question:'',
		answer:'I cannot give you an answer until you ask a question!'
	},
	watch:{
		question:function(newQuestion){
			this.answer = 'waiting for you to stop typing...';
			this.getAnswer();
		}
	},
	methods:{
		getAnswer:_.debounce(
			function(){
				var vm = this;
				if(this.question.indexOf('?') === -1){
					vm.answer = 'Questions usually contain a question mark. ;-)';
					return;
				}
				vm.answer = 'thinking';
				axios.get('https://yesno.wtf/api')
					.then(function(response){
						vm.answer = response.data.answer;
					})
					.catch(function(error){
						vm.answer = 'Error! Could not reach the API. ' + error
					})
			},
			500
		)
	}
})
var example1 = new Vue({
	el:'#example-1',
	data:{
		parentMsg:'Hello',
		items:[
			{msg:'11'},
			{msg:'22'},
			{msg:'33'}
		]
	}
})
var example2 = new Vue({
	el:'#example-2',
	data:{
		object:{
			name:'jack',
			age:30,
			gender:'man'
		}
	}
})
var example3 = new Vue({
	el:'#example-3',
	data:{
		numbers:[1,2,3,4,5,7,8,9,0]
	},
	computed:{
		evenNumbers:function(){
			return this.numbers.filter(function(number){
				return number % 2 === 1;
			})
		}
	}
})
Vue.component('todo-item',{
	template:'\
		<li>\
			{{title}}\
			<button @click = "$emit(\'remove\')">X</button>\
		</li>\
	',
	props:['title']
})
new Vue({
	el:'#todo-list-example',
	data:{
		newTodoText:'',
		todos:[
			'Do the dished',
			'Take out the trash',
			'Mow the lawn'
		]
	},
	methods:{
		addNewTodo:function(){
			this.todos.push(this.newTodoText);
			this.newTodoText = '';
		}
	}
})
var example4 = new Vue({
	el:'#example-4',
	data:{
		counter:0
	}
})
var example5 = new Vue({
  el: '#example-5',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      //alert(event.target.tagName)
    }
  }
})
// 也可以用 JavaScript 直接调用方法
//example5.greet() // -> 'Hello Vue.js!'
new Vue({
  el: '#example-6',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
new Vue({
  el: '#example-7',
  data:{
	  message1:'',
	  message2:'',
	  a:'aa',
	  b:'bb',
	  checked1:'aa',
	  checkedNames:[],
	  picked:'',
	  selected:'2',
	  selected2:['a','c'],
	  options:[
		{ text: 'One', value: '1' },
		{ text: 'Two', value: '2' },
		{ text: 'Three', value: '3' }
	  ]
  }
})