window.onload = () => {
  // 버튼 가져오기
  const btnCrc = document.querySelector(".btnCrc");

  // 버튼 클릭 시 --> 할일
  btnCrc.addEventListener('click', () => {
    // 할 일 처리
    const hTbody = document.getElementById('htmlTbody');
    console.log(hTbody);

    /* js table row and column */
    // insert a row at the end of table
    const newRow = hTbody.insertRow(); // 통짜로 된 row 한줄 추가 tr이 추가됨
    console.log(newRow);

    // 
  })
}