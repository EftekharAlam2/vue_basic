var app = new Vue ({
    el: '#app',
    data:{
        message: "Hello VUE!"
    }
})

var app2 = new Vue ({
    el: '#app2',
    data:{
        message: 'You load this pages on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue ({
    el: '#app3',
    data:{
        seen: true
    }
})

var app4 = new Vue ({
    el: '#app4',
    data:{
        todos: [
            { text: 'Learn HTML' },
            { text: 'Learn CSS' },
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' }
        ]
    }
})

var app5 = new Vue ({
    el: '#app5',
    data:{
        message: 'Hello Vue.js'
    },
    methods:{
        reverse: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: "Hello! Change me"
    }
})
