'use strict'
// 【PC用のフォーム処理】
// ボタン要素を取得
const contactBtn = document.getElementById("contactBtn");

// 性別ラジオボタンのname要素を取得
const gender = document.getElementsByName("gender");
// 年代セレクトボックスのclass要素を取得
const selectJobs = document.getElementsByClassName("selectage")[0];
// ご意見タイトルのclass要素を取得
const txttitle = document.querySelector(".txttitle");
// ご意見のclass要素を取得
const txtgoiken = document.querySelector(".txtarea1");

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
    
    if(selectJobs.options[selectJobs.selectedIndex].value === "") {
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

// 【タブレット・スマートフォン用のフォーム処理】
// ボタン要素を取得
const contactBtnSP = document.getElementById("contactBtn-sp");

// 性別ラジオボタンのname要素を取得
const genderSP = document.getElementsByName("genderSP");
// 年代セレクトボックスのclass要素を取得
const selectJobsSP = document.getElementsByClassName("selectageSP")[0];
// ご意見タイトルのclass要素を取得
const txttitleSP = document.querySelector(".txttitleSP");
// ご意見のclass要素を取得
const txtgoikenSP = document.querySelector(".txtareaSP");

// エラーメッセージ表示の要素を取得
const errMsgGenderSP = document.querySelector(".errMsgGenderSP");
const errMsgAgeSP = document.querySelector(".errMsgAgeSP");
const errMsgTitleSP = document.querySelector(".errMsgTitleSP");
const errMsgGoikenSP = document.querySelector(".errMsgGoikenSP");


// 送信ボタンのイベント処理
contactBtnSP.addEventListener('click', () => {

    if(genderSP[0].checked === false && genderSP[1].checked === false) {    
      errMsgGenderSP.textContent = "性別を選択してください";
    }else{
      errMsgGenderSP.textContent = "";
    }    
    
    if(selectJobsSP.options[selectJobsSP.selectedIndex].value === "") {
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
