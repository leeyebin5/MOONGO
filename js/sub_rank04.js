'use strict';

//연령전체, 과목전체 버튼
const filter_btn = document.querySelectorAll('.filter_btn');
//연령전체, 과목전체 버튼 아래의 ul
const filter_menu = document.querySelectorAll('.filter_btn + ul');

//메뉴 펼쳐지는 함수
for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    console.log(filter_menu[i].classList);

    if (filter_menu[i].classList.value == 'off') {
      filter_menu[i].classList.remove('off');
    } else {
      filter_menu[i].classList.add('off');
    }
  });
}
