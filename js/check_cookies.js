/* 자바스크립트로 쿠키(Cookie) 읽기, 생성, 삭제하기 */  
  // 기본적인 방법 -> document.cookie = "name=???; name2=???; expires=???; path=???";

/* 쿠키 읽기 */
function getCookies() {
/* 로컬에 저장된 쿠키 뿌려주기 */
  const allCookies = document.cookie; // 하나의 문자열로 리턴 --> cookie1=value; cookie2=value; cookie3=value
  console.log(typeof allCookies); // string

/* if 조건문 -> 쿠키가 있으면 */
if(allCookies != '')
  alert(`저장된 쿠키의 값은 ${allCookies} \n다시 방문해주셔서 환영합니다.`)
else
  alert(`저장된 쿠키가 없습니다. \n(첫방문을 환영합니다.)`)
}

/* 쿠키 생성 */
function setCookies() {
  // 기본적인 날짜 출력 -> 날짜 쓸일? -> 만료일 -> expiration, expire
  // let nowDate = new Date();
  // console.log(nowDate);

  // 만료일 생성
  // let expiration = nowDate.getDate() + 10; // 30
  // console.log(typeof expiration);

  // 20일 -> 30일로 날짜가 나타나도록 생성
  let expiration = new Date();
  expiration.setDate(expiration.getDate()+10);
  console.log(expiration);

  // 날짜를 쿠키로 저장하기 위해서 -> UTC 방식으로 표기 -> toUTCString() 메서드 사용.
  console.log(expiration.toUTCString());

  // 쿠키 생성하기
  let cookies = '';
  cookies = `userid=helloworld; expires=${expiration.toUTCString()};`;
  console.log(cookies);

  // 쿠키 저장하기
  document.cookie = cookies;
  alert('쿠키를 생성하였습니다.');
}
