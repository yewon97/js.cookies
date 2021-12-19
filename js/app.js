window.onload = () => {
  // 버튼 가져오기
  const btnCrc = document.querySelector('.btnCrc');

  // 버튼 클릭 시 --> 할일
  btnCrc.addEventListener('click', () => {
    // 할 일 처리
    const hTbody = document.getElementById('htmlTbody');
    console.log(hTbody);

/* js table row and column */
    // insert a row at the end of table
    const newRow0 = hTbody.insertRow(); // 통짜로 된 row 한줄 추가 tr이 추가됨
    console.log(newRow0);

    // insert a cell at the end of the row
    const newCell0 = newRow0.insertCell();
    const newCell1 = newRow0.insertCell();
    const newCell2 = newRow0.insertCell();
    const newCell3 = newRow0.insertCell();
/* 버튼을 클릭할 때마다 tr>td*4 생성됨 */

    // Append - 텍스트 노드를 새롭게 생성한 Cell에 붙이기
    const newText0 = document.createTextNode('홍길동');
    newCell0.appendChild(newText0);
    const newText1 = document.createTextNode('hong@abc.com');
    newCell1.appendChild(newText1);
    const newText2 = document.createTextNode('25살');
    newCell2.appendChild(newText2);
    const newText3 = document.createTextNode('영화보기');
    newCell3.appendChild(newText3);
  });
};