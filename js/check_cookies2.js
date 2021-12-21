/* JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기 */

// 쿠키 읽기
const getCookie = () => {
  // 로컬에 저장된 모든 쿠키 읽어오기
  const allCookies = document.cookie; // 하나의 문자열로 리턴
  console.log(allCookies);

  // if 조건문 -> 쿠키가 있으면
  if (allCookies != '') {
    alert(`저장된 쿠키 값은 ${allCookies} 입니다.`);
  } else {
    alert('저장된 쿠키 값이 없습니다');
  }
};

// 쿠키 생성히기
const setCookie = (cname, cvalue, cexpire) => {
  event.preventDefault(); // submit, href 발생 시 이동 방지 및 새로 실행되는 것을 방지.

  // 넘어온 값 체크
  if (document.getElementById('cname').value != '') {
    cname = document.getElementById('cname').value;
    cvalue = document.getElementById('cvalue').value;
    cexpire = document.getElementById('cexpire').value;
  }
  // console.log(`name=${cname} value=${cvalue} expire=${cexpire}`);
  // console.log(typeof cexpire); // string

  // 만료일 생성 -> 현재에서 30일간으로 생성 -> setDate() 메서드 사용
  let expiration = new Date();
  console.log(expiration);
  expiration.setDate(expiration.getDate() + parseInt(cexpire)); // Number()로 처리 가능
  console.log(expiration);

  // 날짜를 쿠키로 저장하기 위해서 -> UTC방식으로 표기
  // expiration.toUTCString();
  // console.log(expiration.toUTCString());

  // 쿠키 생성하기
  let cookie = '';
  cookie = `${cname}=${cvalue}; expires=${expiration.toUTCString()};`;
  console.log(cookie);

  // 쿠키 저장하기
  document.cookie = cookie;

  // input 태그 초기화
  // document.getElementById('cname').value = '';
  // document.getElementById('cname').focus();
  document.getElementById('form').reset(); // 한방에 초기화

  alert('쿠키를 생성하였습니다.');
};
// addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);

// 쿠키 삭제하기
const delCookie = (cname) => {
  // 쿠키 삭제는? 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
  // document.cookie = 'user-id=; expires=Sat, 01 Jan 1972 00:00:00 GMT'

  console.log(cname);
  setCookie(cname, '', 0);
  alert('쿠키를 삭제했습니다.');
};

// 쿠키 전체 삭제하기
const allDelCookies = (domain, path) => {
  // const doc = document;
  domain = domain || document.domain;
  path = path || '/';

  const cookies = document.cookie.split('; '); // 배열로 반환
  console.log(cookies);
  const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';

  // 반목문 순회하면서 쿠키 전체 삭제
  if (!document.cookie) {
    alert('삭제할 쿠키가 없습니다.');
  } else {
    for (i = 0; i < cookies.length; i++) {
      // const uname = cookies[i].split('=')[0];
      // document.cookie = `${uname}=; expires=${expiration}`;
      document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration;
    }
    alert('쿠키 전부 삭제완료!!');
  }
};
