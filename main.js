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