$(function () {
     showhide()
     search()

     function showhide () {
        $('[name=show_hide]').hover(function () { // 显示
          var id = this.id + '_items'
          $('#'+id).show()
        }, function () {// 隐藏
          var id = this.id + '_items'
          $('#'+id).hide()
        })
      }

      function search() {
        $('#txtSearch')
          .on('foucs keyup',function () {
            var text = this.value.trim()
            if (text){
              $('#search_helper').show()
            }
          })
          .blur(function () {
            $('#search_helper').hide()
          })
      }
})