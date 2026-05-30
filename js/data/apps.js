/** @type {App[]} */
export const apps = [
  {
    id: "pokertimer",
    name: "PokerTimer",
    category: "Entertainment",
    description:
      "ポーカートーナメント専用のブラインドタイマー。Fast / Normal / Slow の3段階でペースを調整でき、カスタムブラインド構造の作成にも対応。Live Activity でロック画面にも残り時間を表示します。",
    icon: "images/icons/pokertimer.jpg",
    tags: ["iPhone & iPad", "Live Activity", "SwiftUI"],
    links: {
      appStore: "https://apps.apple.com/us/app/pokertimer/id6747610053",
      privacy: "pokerTimer/privacy.html",
    },
  },
  {
    id: "jobhunt",
    name: "JobHunt",
    category: "Productivity",
    description:
      "就職活動の選考状況をカレンダーで一元管理。企業ごとの選考ステップ、面接日程、締め切りをまとめて把握して、忙しい就活を効率化します。",
    icon: "images/icons/jobhunt.jpg",
    tags: ["iPhone", "カレンダー管理", "就職活動"],
    links: {
      appStore:
        "https://apps.apple.com/us/app/jobhunt-%E5%B0%B1%E6%B4%BB%E7%AE%A1%E7%90%86%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id6445801905",
      privacy: "jobHunt/privacy.html",
      terms: "jobHunt/Terms.html",
    },
  },
  {
    id: "skyshaker",
    name: "SkyShaker",
    category: "Health & Wellness",
    description:
      "不満やネガティブな感情を入力して、スマホを振ると空に飛ばすストレス解消アプリ。シンプルな操作で気持ちをリセット。溜め込んだ感情を手放すきっかけに。",
    icon: "images/icons/skyshaker.jpg",
    tags: ["iPhone", "ストレス解消", "ウェルネス"],
    links: {
      appStore: "https://apps.apple.com/us/app/skyshaker/id6450996386",
      privacy: "skyShaker/privacy.html",
    },
  },
  {
    id: "tatami",
    name: "畳チャレンジ",
    category: "Game",
    description: "日本の伝統「畳」をテーマにしたゲームアプリ。",
    icon: null,
    iconFallback: "畳",
    tags: ["iPhone", "ゲーム"],
    links: {
      privacy: "tatamiChallenge/privacy.html",
    },
  },
];
