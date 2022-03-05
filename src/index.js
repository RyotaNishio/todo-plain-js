import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

// 完了リストから削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに要素を生成
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // liタグ生成
  const li = document.createElement("li");

  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了処理
  completeButton.addEventListener("click", () => {
    // 戻すbutton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻す処理
    backButton.addEventListener("click", () => {
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
      deleteFromCompleteList(backButton.parentNode.parentNode);
    });

    // 要素の中身を書き換え
    div.textContent = null;
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストへ追加
    const completeTarget = div.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除機能
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  const ul = document.getElementById("imcomplete-list");
  ul.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
