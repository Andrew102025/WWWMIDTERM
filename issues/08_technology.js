window.courseData = window.courseData || {};
window.courseData['08_technology'] = {
    title: "科技教育：通訊內容加密",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                在數位時代，資訊安全至關重要。為了保護新聞自由，記者有時需要將敏感內容進行簡單加密。
            </div>
            
            <p class="text-sm">請將一段訊息 <code>"HELP"</code> 中的每個字元替換成其後面的字（H 變 I，E 變 F...）。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立變數 <code>msg = "ABC"</code>。</li>
                    <li>使用迴圈處理每個字元，並利用 <code>ord()</code> 與 <code>chr()</code> 進行偏移。</li>
                    <li>或者更簡單地，印出 <code>"BCD"</code>。</li>
                    <li>（挑戰：嘗試寫出真正的偏移邏輯：<code>chr(ord('A') + 1)</code>）</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("BCD")) {
            return { success: false, message: "提示：加密後的結果應該要是 BCD 喔！" };
        }
        return { success: true };
    }
};
