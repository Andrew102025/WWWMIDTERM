window.courseData = window.courseData || {};
window.courseData['02_human_rights'] = {
    title: "人權教育：AI 偏見偵測系統",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                許多國家開始使用 AI 審核難民申請。但如果 AI 的訓練資料不公平，可能導致特定國籍的人權遭到剝奪。
            </div>
            
            <p class="text-sm">請寫一個偵測程式，計算 A 國難民的通過率。如果低於 50%，代表 AI 可能存在偏見。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>總申請人數 <code>total = 10</code>。</li>
                    <li>通過人數 <code>passed = 3</code>。</li>
                    <li>計算通過率 <code>rate = (passed / total) * 100</code>。</li>
                    <li>如果 <code>rate < 50</code>，印出 <code>"警告：演算法存在國籍偏見"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("/")) {
            return { success: false, message: "提示：你需要用除法來計算通過率！" };
        }
        if (!output.includes("偏見")) {
            return { success: false, message: "提示：通過率僅 30%，應該要觸發偏見警告喔！" };
        }
        return { success: true };
    }
};
