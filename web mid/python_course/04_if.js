window.courseData = window.courseData || {};
window.courseData['py_04_if'] = {
    title: "條件判斷與邏輯控制",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50">
                <p class="text-sm font-bold text-indigo-300 mb-1"><i class="fa-solid fa-code-branch"></i> 什麼是條件判斷？</p>
                <p class="text-xs text-gray-300 leading-relaxed">
                    條件判斷讓程式具有「思考」的能力。根據 <b>True (真)</b> 或 <b>False (假)</b> 的結果，執行不同的程式碼區塊。
                </p>
            </div>

            <div class="bg-[#22272e] p-4 rounded-lg border border-[#444c56]">
                <h3 class="text-accent font-semibold mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-triangle-exclamation"></i> 語法三大重點
                </h3>
                <ol class="text-[10px] text-gray-300 space-y-1 list-decimal pl-4">
                    <li><b>冒號 (:)：</b> 在 <code>if</code> 條件式的結尾必須加上冒號。</li>
                    <li><b>縮排 (Indentation)：</b> 屬於該條件的程式碼必須「向右縮進」（通常是 4 個空白）。這是 Python 最獨特的地方！</li>
                    <li><b>比較運算子：</b> <code>==</code> (等於), <code>!=</code> (不等於), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>。</li>
                </ol>
            </div>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 flex items-center gap-2">
                    <i class="fa-solid fa-shield-heart"></i> 冒險任務：
                </p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立變數 <code>hp = 50</code>。</li>
                    <li>寫一個 <code>if</code>：如果 <code>hp &gt; 0</code>，印出 <code>"存活"</code>。</li>
                    <li>寫一個 <code>else</code>：否則印出 <code>"遊戲結束"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("if")) {
            return { success: false, message: "提示：你需要使用 if 關鍵字！" };
        }
        if (!output.includes("存活")) {
            return { success: false, message: "提示：當 hp 為 50 時，應該要印出「存活」喔！" };
        }
        return { success: true };
    }
};
