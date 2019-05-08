// 游戏规则
$('.rules').on('click', function () {
  $('.rules-item').stop().fadeIn()
  $('.rules-item > a').on('click', function (event) {
    $(this).parent().stop().fadeOut()
    event.preventDefault()
  })
})

// 游戏开始
$('.start').on('click', function () {
  $(this).stop().fadeOut(100)
  progressHandler()
  startWolfAnimation()
})

// 重新开始
$('.mask > button').on('click', function () {
  $(this).parent().stop().fadeOut()
  progressHandler()
  startWolfAnimation()
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
      stopWolfAnimation()
      clearInterval(timer)
    }
  }, 1000)
}

var wolfTimer = null
// 处理灰太狼动画
function startWolfAnimation() {
  var wolf1 = ['./img/h0.png', './img/h1.png', './img/h2.png', './img/h3.png', './img/h4.png', './img/h5.png', './img/h6.png', './img/h7.png', './img/h8.png', './img/h9.png']
  var wolf2 = ['./img/x0.png', './img/x1.png', './img/x2.png', './img/x3.png', './img/x4.png', './img/x5.png', './img/x6.png', './img/x7.png', './img/x8.png', './img/x9.png']
  var arrPos = [
    {left: '100px', top: '115px'},
    {left: '20px', top: '160px'},
    {left: '190px', top: '142px'},
    {left: '105px', top: '193px'},
    {left: '19px', top: '221px'},
    {left: '202px', top: '212px'},
    {left: '120px', top: '275px'},
    {left: '30px', top: '295px'},
    {left: '209px', top: '297px'},
  ]
  var $img = $('<img class="wolfImg" src="">')
  var positionIndex = Math.floor(  Math.random() * 8)
  var wolfArrRandom = Math.round(Math.random())
  var wolfType = wolfArrRandom === 0 ? wolf1 : wolf2
  $img.css({
    position: 'absolute',
    left: arrPos[positionIndex].left,
    top: arrPos[positionIndex].top
  })
  var wolfIndex = 0
  wolfTimer = setInterval(function () {
    $img.attr('src', wolfType[wolfIndex])
    wolfIndex += 1
    if (wolfIndex > 5) {
      $img.remove()
      clearInterval(wolfTimer)
      startWolfAnimation()
    }
    console.log(wolfIndex);
  }, 200)
  $('.container').append($img)
}

// 停止动画
function stopWolfAnimation() {
  $('.wolfImg').remove()
  clearInterval(wolfTimer)
}