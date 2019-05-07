$('.rules').on('click', function () {
  $('.rules-item').stop().fadeIn()
  $('.rules-item > a').on('click', function (event) {
    $(this).parent().stop().fadeOut()
    event.preventDefault()
  })
})

$('.start').on('click', function () {
  $(this).stop().fadeOut(100)
  progressHandler()
})

$('.mask > button').on('click', function () {
  $(this).parent().stop().fadeOut()
  progressHandler()
})








// 处理进度条
function progressHandler() {
  $('.progress').css('width', '180px')
  var timer = setInterval(function () {
    var progressWidth = $('.progress').width()
    progressWidth -= 20
    $('.progress').css('width', progressWidth)
    if (progressWidth === 0) {
      $('.mask').stop().fadeIn()
      clearInterval(timer)
    }
  }, 1000)
}