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

// 要素の追加
// 親要素の取得
let parent_text = document.querySelector("#text");

// pタグを生成
let child_p = document.createElement("p");

// タグ内で表示される文字を設定
child_p.textContent = "ふが";

// 親要素に生成したpタグを追加
// 親要素.appendChild(追加したいタグの要素);
// どんどん下に追加される
parent_text.appendChild(child_p);

// pタグを生成
let child_p_moge = document.createElement("p");
// タグ内で表示される文字を設定
child_p_moge.textContent = "もげ";

// ふがの上にもげを追加する
// 親要素.insertBefore(追加したい要素,その手前に追加したい対象の要素);
parent_text.insertBefore(child_p_moge,child_p);

// 要素を色々設定できる
// 押したボタンの文字を、id=textの中に追加する
function btna_click(){
	let parent_text = document.querySelector("#text");
// 追加するpタグを生成
let child_p_for_btn = document.createElement("p");
child_p_for_btn.textContent = document.querySelector("#btnA").textContent;
child_p_for_btn.id = "add_id";
child_p_for_btn.style.color = "blue";
parent_text.appendChild(child_p_for_btn);
}

// 要素の削除
// 削除したい要素.remove();
// let ant = document.querySelector("#ant");
// ant.remove();

// 削除したい要素が含まれている親要素.removeChild(削除したい要素);
let room = document.querySelector("#room");
// roomの一番最初の子要素を削除
// room.removeChild(room.firstElementChild);
// ゴキブリを削除する
room.removeChild(document.querySelector("#cockroach"));




















