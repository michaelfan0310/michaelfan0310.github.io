$(function () {
     showhide()

     function showhide () {
        $('[name=show_hide]').hover(function () { // 显示
          var id = this.id + '_items'
          $('#'+id).show()
        }, function () {// 隐藏
          var id = this.id + '_items'
          $('#'+id).hide()
        })
      }
})