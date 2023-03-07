$(function () {
     showhide()
     searchpage()
     search1()

     function showhide () {
        $('[name=show_hide]').hover(function () { // 显示
          var id = this.id + '_items'
          $('#'+id).show()
        }, function () {// 隐藏
          var id = this.id + '_items'
          $('#'+id).hide()
        })
      }

      

      function searchpage() {
        $('#txtSearch')
          .on('foucs keyup',function () {
            var text = this.value.trim()
            if (text){
              $('#search_helper').show()
            }
            text=""
          })
          .blur(function () {
            $('#search_helper').hide()
            this.value=""
          })
      }

      function search1() {
        $('#txtSearch1')
          .on('foucs keyup',function () {
            var text = this.value.trim()
            if (text){
              $('#search_helper1').show()
            }
            
          })
          .blur(function () {
            $('#search_helper1').hide()
            this.value=""
          })
      }
})