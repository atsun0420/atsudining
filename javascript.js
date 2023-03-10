'use strict'
//【お問い合わせフォーム(PC用)】
const contactBtn = document.getElementById("contactBtn"); // ボタン要素(PC用)を取得 
const gender = document.getElementsByName("gender"); // 性別ラジオボタンのname要素を取得
const selectage = document.getElementsByClassName("selectage")[0]; // 年代セレクトボックスのclass要素を取得
const txttitle = document.querySelector(".txttitle"); // ご意見タイトルのclass要素を取得
const txtgoiken = document.querySelector(".txtarea"); // ご意見のclass要素を取得

// エラーメッセージ表示の要素を取得
const errMsgGender = document.querySelector(".errMsgGender");
const errMsgAge = document.querySelector(".errMsgAge");
const errMsgTitle = document.querySelector(".errMsgTitle");
const errMsgGoiken = document.querySelector(".errMsgGoiken");

// 送信ボタンのイベント処理
contactBtn.addEventListener('click', () => {
  if(gender[0].checked === false && gender[1].checked === false) {    
    errMsgGender.textContent = "性別を選択してください";
  }else{
    errMsgGender.textContent = "";
  }

  if(selectage.options[selectage.selectedIndex].value === "") {
    errMsgAge.textContent = "年代を選択してください";
  }else{
    errMsgAge.textContent = "";
  }  

  if(!txttitle.value) {
    errMsgTitle.textContent = "タイトルを入力してください";      
  }else{
    errMsgTitle.textContent = "";
  }

  if(!txtgoiken.value) {
    errMsgGoiken.textContent = "ご意見を入力してください";
  }else{
    errMsgGoiken.textContent = "";
  }
  
  if(errMsgGender.textContent === "" && errMsgAge.textContent === "" &&
    errMsgTitle.textContent === "" && errMsgGoiken.textContent === "") {
      location.assign('comp.html');
  }
});

//【お問い合わせフォーム(タブレット・スマートフォン用)】
const contactBtnSP = document.getElementById("contactBtn-sp"); // ボタン要素(タブレット・スマートフォン用)を取得
const genderSP = document.getElementsByName("gender-sp"); // 性別ラジオボタンのname要素を取得
const selectageSP = document.getElementsByClassName("selectage-sp")[0]; // 年代セレクトボックスのclass要素を取得
const txttitleSP = document.querySelector(".txttitle-sp"); // ご意見タイトルのclass要素を取得
const txtgoikenSP = document.querySelector(".txtarea-sp"); // ご意見のclass要素を取得

// エラーメッセージ表示の要素を取得
const errMsgGenderSP = document.querySelector(".errMsgGender-sp");
const errMsgAgeSP = document.querySelector(".errMsgAge-sp");
const errMsgTitleSP = document.querySelector(".errMsgTitle-sp");
const errMsgGoikenSP = document.querySelector(".errMsgGoiken-sp");

// 送信ボタンのイベント処理
contactBtnSP.addEventListener('click', () => {
  if(genderSP[0].checked === false && genderSP[1].checked === false) {    
    errMsgGenderSP.textContent = "性別を選択してください";
  }else{
    errMsgGenderSP.textContent = "";
  }

  if(selectageSP.options[selectageSP.selectedIndex].value === "") {
    errMsgAgeSP.textContent = "年代を選択してください";
  }else{
    errMsgAgeSP.textContent = "";
  }  

  if(!txttitleSP.value) {
    errMsgTitleSP.textContent = "タイトルを入力してください";      
  }else{
    errMsgTitleSP.textContent = "";
  }

  if(!txtgoikenSP.value) {
    errMsgGoikenSP.textContent = "ご意見を入力してください";
  }else{
    errMsgGoikenSP.textContent = "";
  }
  
  if(errMsgGenderSP.textContent === "" && errMsgAgeSP.textContent === "" &&
    errMsgTitleSP.textContent === "" && errMsgGoikenSP.textContent === "") {
      location.assign('comp.html');
  }
});
