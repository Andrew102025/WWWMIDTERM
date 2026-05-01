window.courseData = window.courseData || {};
window.courseData['py_01_hello'] = {
    title: "Python 第一步：Hello World",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50">
                <p class="text-sm font-bold text-indigo-300 mb-1"><i class="fa-solid fa-rocket"></i> 為什麼學習 Python？</p>
                <p class="text-xs text-gray-300 leading-relaxed">
                    Python 是由 <b>Guido van Rossum</b> 於 1991 年開發的程式語言。它的設計哲學強調「程式碼的可讀性」與「簡潔的語法」。
                    目前廣泛應用於 <b>人工智慧 (AI)</b>、<b>數據分析</b>、<b>網頁開發</b> 與 <b>自動化腳本</b>，是目前全球最受歡迎的語言之一！
                </p>
            </div>

            <div class="bg-[#22272e] p-4 rounded-lg border border-[#444c56]">
                <h3 class="text-accent font-semibold mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-lightbulb"></i> 核心知識點：print() 函式
                </h3>
                <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4">
                    <li><b>語法結構：</b> <code>print("文字內容")</code></li>
                    <li><b>字串 (String)：</b> 在 Python 中，文字必須放在引號（單引號 <code>'</code> 或雙引號 <code>"</code> 均可）之間。</li>
                    <li><b>大小寫敏感：</b> Python 非常在意大小寫，<code>print</code> 與 <code>Print</code> 是不同的，寫錯會產生錯誤喔！</li>
                    <li><b>換行功能：</b> 每次呼叫 <code>print()</code>，預設都會在結尾自動換行。</li>
                </ul>
            </div>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 flex items-center gap-2">
                    <i class="fa-solid fa-gamepad"></i> 你的任務：
                </p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>在右側編輯器中使用 <code>print</code> 函式。</li>
                    <li>印出精確的文字：<code>"Hello Python"</code>。</li>
                    <li>點擊右上角的「Run」進行驗證。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("print")) {
            return { success: false, message: "提示：要使用 print() 才能把結果印出來！" };
        }
        if (!output.includes("Hello Python")) {
            return { success: false, message: "提示：輸出的文字必須是「Hello Python」喔！" };
        }
        return { success: true };
    }
};
