const methodData = {
  cross: {
    badge: "比較",
    title: "集計・検定",
    summary:
      "最初に行うべき基礎分析です。年代別、地域別、前回受診有無別などに分けて、受診率や平均値がどれくらい違うかを確認します。",
    boxes: [
      {
        title: "何に使う？",
        body: ["グループごとの割合や平均の違いを見る", "データ全体の偏りや外れ値を見つける", "モデルを作る前の仮説づくりに使う"],
      },
      {
        title: "検診の例",
        body: ["20代と50代で受診率が違うか", "前回受診した人と未受診の人で差があるか", "地域や職場単位で低い場所があるか"],
      },
      {
        title: "自分で作れる？",
        body: ["Excelのピボットテーブルで十分作れます", "割合の差やχ²検定はExcelや統計ソフトで確認できます", "まずは棒グラフで見える差を確認します"],
      },
      {
        title: "注意点",
        body: ["差があるように見えても、年齢など別の要因の影響かもしれません", "人数が少ない層は割合が不安定です", "有意差だけでなく差の大きさを見ます"],
      },
    ],
  },
  linear: {
    badge: "数値",
    title: "回帰分析",
    summary:
      "目的変数が数値のときに使います。何が増えると結果がどれくらい増減しそうかを説明したいときの基本です。",
    boxes: [
      {
        title: "何に使う？",
        body: ["血圧、費用、満足度点数などの数値を説明する", "複数の要因を同時に考慮する", "影響の方向と大きさをざっくり把握する"],
      },
      {
        title: "検診の例",
        body: ["保健指導後に血圧がどれくらい下がるか", "検診費用や所要時間が満足度に関係するか", "案内回数が予約までの日数に関係するか"],
      },
      {
        title: "自分で作れる？",
        body: ["Excelの分析ツール、R、Pythonで作れます", "説明変数を入れすぎず、まず少数から始めると理解しやすいです", "散布図を見て直線で表せそうか確認します"],
      },
      {
        title: "注意点",
        body: ["結果が0/1の場合は線形回帰よりロジスティック回帰が自然です", "外れ値に影響されやすいです", "相関があることと原因であることは別です"],
      },
    ],
  },
  logistic: {
    badge: "確率",
    title: "ロジスティック回帰",
    summary:
      "受診する / しない、購入する / しない、離職する / しないのような二値の結果を、確率として予測・説明する手法です。",
    boxes: [
      {
        title: "何に使う？",
        body: ["ある行動が起きる確率を推定する", "どの要因が起きやすさに関係するかを説明する", "未受診リスクが高い人の候補を作る"],
      },
      {
        title: "検診の例",
        body: ["誰が未受診になりやすいかを予測する", "前回未受診、年齢、勤務形態、家族構成などの影響を見る", "対象者ごとに受診確率スコアを出す"],
      },
      {
        title: "自分で作れる？",
        body: ["Excelだけでも簡易的には可能ですが、RやPythonのほうが実務向きです", "データは1人1行、受診したら1、未受診なら0にします", "結果は確率やオッズ比として読みます"],
      },
      {
        title: "注意点",
        body: ["予測が当たるかを別データで確認します", "低確率だから諦めるのではなく、支援が必要な層として扱います", "説明変数が施策で使える情報か確認します"],
      },
    ],
  },
  tree: {
    badge: "分岐",
    title: "決定木",
    summary:
      "条件で分けながら、受診しやすい層・しにくい層を見つけます。結果がルールとして読めるので、施策設計に向いています。",
    boxes: [
      {
        title: "何に使う？",
        body: ["どの条件で対象者を分けると差が出るかを見る", "現場に説明しやすいルールを作る", "年齢と前回受診など、条件の組み合わせを見つける"],
      },
      {
        title: "検診の例",
        body: ["前回未受診かつ40歳未満はスマホ予約を強化", "前回未受診かつ勤務時間が不規則なら職場導線を強化", "毎年受診層には維持施策や紹介依頼"],
      },
      {
        title: "自分で作れる？",
        body: ["小さなデータなら手作業でも考え方は作れます", "各条件で分けたとき、受診率の差が大きくなる条件を選びます", "本格的にはRやPythonで自動作成し、深くなりすぎないよう制限します"],
      },
      {
        title: "注意点",
        body: ["分岐を増やすほど、たまたまの特徴を拾いやすくなります", "木が深いと説明しづらくなります", "精度だけでなく対象人数と実行可能性を見ます"],
      },
    ],
  },
  cluster: {
    badge: "探索",
    title: "クラスタリング",
    summary:
      "正解ラベルを決めず、似ている人をまとめる探索手法です。予測というより、施策タイプを考えるための仮説づくりに向きます。",
    boxes: [
      {
        title: "何に使う？",
        body: ["似た行動・属性の人をまとめる", "顧客タイプや生活パターンを見つける", "施策メニューを考えるための材料にする"],
      },
      {
        title: "検診の例",
        body: ["忙しい若年層、健康意識は高いが先延ばしする層、不安が強い層などに分ける", "層ごとに案内文や予約導線を変える", "受診有無以外の特徴を探す"],
      },
      {
        title: "自分で作れる？",
        body: ["Excelだけでは少し難しく、RやPythonが向いています", "似ている度合いを決めるため、使う変数選びが重要です", "結果の名前づけは人間が行います"],
      },
      {
        title: "注意点",
        body: ["クラスタ数に正解はありません", "それっぽい名前をつけすぎると後付け解釈になります", "施策で使える層かどうかを必ず確認します"],
      },
    ],
  },
};

const recommendations = {
  difference: {
    title: "集計・検定から始める",
    body: "グループごとの受診率や平均値の違いを見る段階です。まずクロス集計と棒グラフで差を見て、必要ならχ²検定やt検定で確認します。",
    tags: ["クロス集計", "χ²検定", "t検定", "棒グラフ"],
  },
  numeric: {
    title: "回帰分析",
    body: "結果が血圧、費用、満足度点数のような数値なら回帰分析が基本です。複数の要因を同時に見たいときは重回帰にします。",
    tags: ["線形回帰", "重回帰", "散布図", "係数の解釈"],
  },
  binary: {
    title: "ロジスティック回帰 + 決定木",
    body: "受診する / しないのような二値結果はロジスティック回帰で確率を推定します。施策に落とすときは決定木で層別ルールを作ると説明しやすくなります。",
    tags: ["受診確率", "オッズ比", "未受診リスク", "層別施策"],
  },
  segment: {
    title: "決定木またはクラスタリング",
    body: "目的変数があるなら決定木、正解を決めずに似た人を探すならクラスタリングです。施策対象を分けたいなら、対象人数も一緒に見ます。",
    tags: ["決定木", "クラスタリング", "対象人数", "施策タイプ"],
  },
  time: {
    title: "生存時間分析",
    body: "いつ受診するか、何日後に予約するかなど時間まで見たい場合は生存時間分析が候補です。基礎を学ぶ段階では、まず期間別の受診率グラフから始めると理解しやすいです。",
    tags: ["受診までの日数", "期間別受診率", "生存時間分析"],
  },
};

const treeData = {
  previous: {
    condition: "前回受診したか",
    yesRate: 74,
    noRate: 31,
    yesCount: "42人中31人",
    noCount: "38人中12人",
    headline: "前回受診は、受診率を大きく分ける候補です。",
    explanation:
      "前回受診した人は今年も受診しやすく、未受診の人は今年も離脱しやすい傾向があります。最初の分岐として直感的で、施策にもつなげやすい条件です。",
    rows: [["はい", "74%"], ["いいえ", "31%"], ["差", "43pt"]],
  },
  age: {
    condition: "40歳以上か",
    yesRate: 68,
    noRate: 39,
    yesCount: "45人中31人",
    noCount: "35人中14人",
    headline: "年齢でも差は出ますが、施策は慎重に考えます。",
    explanation:
      "年齢は分かりやすい分岐ですが、それだけで原因とは言えません。若年層にはスマホ予約や夜間枠など、生活導線に合わせた施策を考えます。",
    rows: [["40歳以上", "68%"], ["40歳未満", "39%"], ["差", "29pt"]],
  },
  work: {
    condition: "勤務時間が不規則か",
    yesRate: 36,
    noRate: 66,
    yesCount: "28人中10人",
    noCount: "52人中34人",
    headline: "勤務時間は、予約のしやすさに関係しそうです。",
    explanation:
      "不規則勤務の人は、案内を読む気持ちがあっても日程調整で離脱する可能性があります。職場での受診枠や日程提案つきの案内が候補です。",
    rows: [["不規則", "36%"], ["規則的", "66%"], ["差", "30pt"]],
  },
  family: {
    condition: "家族と同居か",
    yesRate: 63,
    noRate: 48,
    yesCount: "46人中29人",
    noCount: "34人中16人",
    headline: "家族構成は補助的な分岐として使えます。",
    explanation:
      "差はありますが、前回受診ほど強い分岐ではありません。家族からの声かけや同時予約など、施策の切り口として見ると役立ちます。",
    rows: [["同居あり", "63%"], ["単身", "48%"], ["差", "15pt"]],
  },
};

const caseData = {
  1: {
    title: "まずは、どの層で受診率が低いかを見る。",
    body: "年代、地域、前回受診、勤務形態などでクロス集計します。ここではまだ複雑なモデルを作らず、受診率の低い層と人数規模を把握します。",
    bullets: ["使う手法: 集計・検定", "見るもの: 受診率、人数、前年差", "アウトプット: 優先して深掘りする層"],
  },
  2: {
    title: "次に、未受診になりやすい人を確率で見る。",
    body: "ロジスティック回帰で、各人の受診確率や未受診リスクを推定します。説明変数は、施策に使える情報を優先します。",
    bullets: ["使う手法: ロジスティック回帰", "見るもの: 確率、オッズ比、AUC", "アウトプット: 重点フォロー候補"],
  },
  3: {
    title: "施策に落とすため、わかりやすい分岐ルールにする。",
    body: "決定木で、前回受診、年齢、勤務形態などの条件を組み合わせます。ルールが単純で、対象人数が十分ある層を優先します。",
    bullets: ["使う手法: 決定木", "見るもの: 分岐条件、受診率差、対象人数", "アウトプット: 層別アプローチ"],
  },
  4: {
    title: "最後に、施策で本当に上がったかを検証する。",
    body: "案内文、電話、予約支援などの効果をA/Bテストや前後比較で確認します。分析は施策を出して終わりではなく、改善につなげます。",
    bullets: ["使う手法: A/Bテスト、前後比較", "見るもの: 受診率、費用、対象者反応", "アウトプット: 次回施策の改善案"],
  },
};

function renderMethod(key) {
  const data = methodData[key];
  document.querySelectorAll(".method-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.method === key);
  });
  document.getElementById("methodBadge").textContent = data.badge;
  document.getElementById("methodTitle").textContent = data.title;
  document.getElementById("methodSummary").textContent = data.summary;
  document.getElementById("methodGrid").innerHTML = data.boxes
    .map(
      (box) => `
        <section class="info-box">
          <h4>${box.title}</h4>
          <ul>${box.body.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
      `,
    )
    .join("");
}

function renderRecommendation() {
  const goal = document.getElementById("goalSelect").value;
  const outcome = document.getElementById("outcomeSelect").value;
  const priority = document.getElementById("prioritySelect").value;
  let data = recommendations[goal];

  if (outcome === "number") data = recommendations.numeric;
  if (outcome === "rate" && goal !== "difference") data = recommendations.binary;
  if (outcome === "none") data = recommendations.segment;

  const extra =
    priority === "accuracy"
      ? " 予測精度を重視するなら、検証データで当たり具合を確認します。"
      : priority === "action"
        ? " 施策化を重視するなら、対象人数と連絡手段も一緒に見ます。"
        : priority === "explain"
          ? " 説明しやすさを重視するなら、係数や分岐ルールが読める手法を優先します。"
          : " まず簡単に試すなら、集計と可視化から始めます。";

  document.getElementById("recommendTitle").textContent = data.title;
  document.getElementById("recommendBody").textContent = data.body + extra;
  document.getElementById("recommendTags").innerHTML = data.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function updateProbability() {
  const age = Number(document.getElementById("ageRange").value);
  const previous = document.getElementById("previousVisit").value;
  const support = document.getElementById("supportLevel").value;
  let score = 42;

  score += Math.max(0, age - 30) * 0.55;
  score += previous === "yes" ? 22 : -18;
  score += support === "reminder" ? 8 : support === "booking" ? 17 : 0;
  score = Math.max(8, Math.min(92, Math.round(score)));

  document.getElementById("ageValue").textContent = `${age}歳`;
  document.getElementById("gaugeFill").style.width = `${score}%`;
  document.getElementById("probabilityLabel").textContent = `${score}%`;
  document.getElementById("riskLabel").textContent =
    score >= 70 ? "高い受診見込み" : score >= 45 ? "中程度の受診見込み" : "重点フォロー候補";
  document.getElementById("probabilityNote").textContent =
    score >= 70
      ? "受診しやすい層です。維持施策や紹介依頼など、負担の少ない接点が向きます。"
      : score >= 45
        ? "少しの支援で動く可能性があります。リマインドや予約導線の改善が候補です。"
        : "未受診になりやすい層です。案内文だけでなく、日程提案や個別接点を検討します。";
}

function renderTree(key) {
  const data = treeData[key];
  document.querySelectorAll(".split-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.split === key);
  });
  document.getElementById("treeRoot").textContent = data.condition;
  document.getElementById("yesRate").textContent = `${data.yesRate}%`;
  document.getElementById("noRate").textContent = `${data.noRate}%`;
  document.getElementById("yesCount").textContent = data.yesCount;
  document.getElementById("noCount").textContent = data.noCount;
  document.getElementById("treeHeadline").textContent = data.headline;
  document.getElementById("treeExplanation").textContent = data.explanation;
  document.getElementById("treeTable").innerHTML = data.rows
    .map((row) => `<div class="mini-row"><span>${row[0]}</span><strong>${row[1]}</strong></div>`)
    .join("");
}

function renderCase(key) {
  const data = caseData[key];
  document.querySelectorAll(".case-step").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.case === key);
  });
  document.getElementById("caseTitle").textContent = data.title;
  document.getElementById("caseBody").textContent = data.body;
  document.getElementById("caseBullets").innerHTML = data.bullets.map((b) => `<div class="case-pill">${b}</div>`).join("");
}

function initNavHighlight() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll(".method-tab").forEach((btn) => btn.addEventListener("click", () => renderMethod(btn.dataset.method)));
document.querySelectorAll("#goalSelect, #outcomeSelect, #prioritySelect").forEach((el) => el.addEventListener("change", renderRecommendation));
document.querySelectorAll("#ageRange, #previousVisit, #supportLevel").forEach((el) => el.addEventListener("input", updateProbability));
document.querySelectorAll(".split-btn").forEach((btn) => btn.addEventListener("click", () => renderTree(btn.dataset.split)));
document.querySelectorAll(".case-step").forEach((btn) => btn.addEventListener("click", () => renderCase(btn.dataset.case)));

renderMethod("cross");
renderRecommendation();
updateProbability();
renderTree("previous");
renderCase("1");
initNavHighlight();
