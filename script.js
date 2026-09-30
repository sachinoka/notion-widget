// ============================================
// MY RULES
// ここに好きな言葉を自由に追加してください
// ============================================

const rules = [

  {
    title: "フットワークは軽く",
    detail: "軽やかに動いて、新しい出会いを楽しむ。"
  },

  {
    title: "リラックスは、ほどよく",
    detail: "自分を縛りすぎず、柔軟に。"
  },

  {
    title: "自虐的な発言はしない",
    detail: "自分を必要以上に低く見せない。"
  },

  {
    title: "自分はラッキーだと信じる",
    detail: "自分でいい方向に暗示をかける。"
  },

  // ==========================================
  // ↓ここから自分の好きな言葉を追加
  // ==========================================

  {
    title: "ここに好きな言葉",
    detail: "ここに補足を書く"
  },

  {
    title: "もうひとつ好きな言葉",
    detail: "補足がいらなければ空欄でもOK"
  }

];


// ============================================
// 以下は変更しなくてOK
// ============================================

const ruleElement = document.getElementById("rule");
const quoteElement = document.getElementById("quote");
const detailElement = document.getElementById("detail");
const nextButton = document.getElementById("nextButton");

let currentIndex = -1;


// ランダムに1つ選ぶ
function getRandomIndex() {

  if (rules.length === 1) {
    return 0;
  }

  let index;

  do {
    index = Math.floor(Math.random() * rules.length);
  } while (index === currentIndex);

  return index;
}


// 言葉を表示する
function showRule() {

  currentIndex = getRandomIndex();

  const item = rules[currentIndex];

  ruleElement.textContent =
    "RULE " + (currentIndex + 1);

  quoteElement.textContent =
    item.title;

  detailElement.textContent =
    item.detail;

  quoteElement.classList.remove("fade");

  // アニメーションを再実行
  void quoteElement.offsetWidth;

  quoteElement.classList.add("fade");
}


// ============================================
// ページを開いた瞬間にランダム表示
// ============================================

showRule();


// ============================================
// ボタンでもランダムに変更
// ============================================

nextButton.addEventListener("click", showRule);
