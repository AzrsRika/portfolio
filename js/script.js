const btn = document.querySelector('.btn-menu'); //.btn-menuをbtnという箱に入れる
const nav = document.querySelector('.sp-nav-list');　//.sp-nav-listをnavという箱に入れる
btn.addEventListener('click', () => { //ボタンをクリックすると
    nav.classList.toggle('open-menu'); //.open-menuというクラスを付けたり外したりする
    if (btn.innerHTML === 'Menu') { //もしボタンに「Menu」と書いてあったら
        btn.innerHTML = 'Close'; //「Close」に変える
    } else { //そうでなければ
        btn.innerHTML = 'Menu'; //「Menu」に変える
    }
});

// トップへ戻るボタン
$(function() {
    let appear = false;
    let pagetop = $('#page-top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px' //下から50pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-100px' //下から-100pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 400); //0.4秒かけてトップへ戻る
      return false;
    });
  });
  