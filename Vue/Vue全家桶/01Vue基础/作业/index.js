window.onload = function() {
    new Vue({
        el: "#myapp",
        data: {
            allFriends: ["小胡子", "梁朝伟", "毛毛雨", "曹操", "搬砖", "万金油", "杨过", "小龙女", "胡一天"],
            selectedFriends: []
        },
        methods: {

            // 添加好友
            add: function(value) {
                if (this.selectedFriends.indexOf(value) === -1) {
                    this.selectedFriends.push(value);
                }
            },

            // 删除好友
            deleteFriends: function(value) {
                let index = this.selectedFriends.indexOf(value);
                if (index !== -1) {
                    this.selectedFriends.splice(index, 1);
                }
            },

            // 是否已经添加
            hasAdd: function(value) {
                return this.selectedFriends.indexOf(value) !== -1
            }
        },

        computed: {

        },

        mounted() {
            console.log("挂载完成")
        }
    })

}