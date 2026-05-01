window.courseData = window.courseData || {};
window.courseData['07_rule_of_law'] = {
    title: "法治教育：刑事責任年齡判定",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                法律會根據年齡來判斷一個人的行為能力。例如，未滿 14 歲為無刑事責任能力人，14~18 歲為限制責任能力人。
            </div>
            
            <p class="text-sm">請定義一個函式，傳入年齡，並回傳其法律責任類別。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>定義函式 <code>def check_law(age):</code></li>
                    <li>在函式內：如果 <code>age < 14</code>，回傳 <code>"無刑事責任"</code>。</li>
                    <li>否則回傳 <code>"需負法律責任"</code>。</li>
                    <li>呼叫 <code>print(check_law(12))</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("def ") || !code.includes("return")) {
            return { success: false, message: "提示：請使用 def 與 return 來定義函式與回傳結果！" };
        }
        if (!output.includes("無刑事責任")) {
            return { success: false, message: "提示：傳入 12 歲，應該要印出無刑事責任喔！" };
        }
        return { success: true };
    }
};
