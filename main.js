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
            { text: 'Learn Vue js' }
        ]
    }
})