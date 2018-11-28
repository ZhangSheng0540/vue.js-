/**
 * Created by Administrator on 2018/11/27 0027.
 */
var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iphone7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'ipad prp',
                price:5888,
                count:1
            },
            {
                id:3,
                name:'macbook pro',
                price:13188,
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function () {
            var total = 0;
            for(var i = 0;i < this.list.length;i++){
                total += this.list[i].price * this.list[i].count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }

    },
    methods:{
        handleReduce:function (index) {
            debugger;
            if (this.list.length === 1) return;
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++
        },
        handleRemove:function (index) {
            this.list.splice(index,1)
        }
    }
});



