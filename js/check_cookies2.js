/* JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기 */

let allCookies = document.cookie;
// 쿠키 읽기

// 쿠키 생성히기
const setCookie = (cname, cvalue, cexpire) => {
  event.preventDefault(); // submit, href 발생 시 이동 방지 및 새로 실행되는 것을 방지.

  // 넘어온 값 체크
  cname = document.getElementById('cname').value;
  cvalue = document.getElementById('cvalue').value;
  cexpire = document.getElementById('cexpire').value;
  // console.log(`name=${cname} value=${cvalue} expire=${cexpire}`);
  // console.log(typeof cexpire); // string

  let cookie = '';
  cookie = `${cname}=${cvalue}; expire=${cexpire};`;
  // console.log(cookie);

  document.cookie = cookie;
  console.log(allCookies);
}
// addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);

// 쿠키 삭제하기

// 쿠키 전체 삭제하기
