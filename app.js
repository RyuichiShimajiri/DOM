// Document Object Modelの略
// HTMLのタグをObject(部品)と見立てて、JavaScriptで操作できる方法のこと

// タグ名を指定して、DOM操作する方法
// getElementsByTagName
let list = document.getElementsByTagName("a");
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[0].href);

// getElementsByClassName
let fuga = document.getElementsByClassName("fuga");
console.log(fuga);

for (let i = 0; i < fuga.length;i++){
	console.log(fuga[i].textContent);
}

// querySelecter(単一要素の取得)
let tako = document.querySelector("#tako.ika");
console.log(tako);

// querySelecterALL(合致する全ての要素の取得)
let ika = document.querySelectorAll("tako.ika");
console.log(ika);

// 親要素取得方法
let first_ika = document.querySelector(".ika");
console.log("子要素の用意");
console.log(first_ika);
console.log("親要素の取得");
let ul = first_ika.parentElement;
console.log(ul);

// 子要素取得方法
console.log("親要素の用意");
let parent = document.querySelector("#hogehoge");
console.log(parent);
console.log("子要素の取得");
console.log(parent.children);

// classを追加する

first_ika.classList.add("textblue");

// 問題
// id=hogehogeのリストの文字を全てクラスtextblueを追加して青色にしましよう。

let blue = document.querySelector("#hogehoge")
         blue.classList.add("textblue")

// クラスの削除
// let ul = first_ika.parentElement;
// console.log(ul);

let takolist = ul.children;
takolist[1].classList.remove("textblue");

// インプットタグの入力欄の文字の取得方法
var input = document.querySelector("#input_name");
console.log(input.value);

function getinput(){
	var input = document.querySelector("#input_name");
console.log(input.value);
// 編集方法
input.value = input.value + "様";
}


// イベント登録
var text = document.querySelector("#text");
// 要素.addEventListener(イベント名,function(){イベント時に行いたい処理});
text.addEventListener("click",function(){
	// this イベントを受け取った要素そのもの
	this.style.color = "red";
});

var html = document.querySelector("#html");
html.addEventListener("mouseover",function(){
	this.style.color = "yellow";
});
html.addEventListener("mouseleave",function(){
	this.style.color = "";
});






























