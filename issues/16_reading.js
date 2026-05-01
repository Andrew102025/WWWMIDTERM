window.courseData = window.courseData || {};
window.courseData['16_reading'] = {
    title: "閱讀素養：假新聞關鍵字偵測",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                假新聞常使用過度誇張的詞彙來吸引點閱。我們可以透過統計特定詞彙出現的次數來進行初步篩選。
            </div>
            
            <p class="text-sm">統計一段新聞標題中 "震驚" 出現了幾次。如果大於 2 次，提示為疑似假新聞。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>標題 <code>news = "震驚！這件事太震驚了，全人類都震驚了！"</code>。</li>
                    <li>使用 <code>news.count("震驚")</code> 計算次數。</li>
                    <li>如果次數 > 2，印出 <code>"疑似標題黨假新聞"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("count(")) {
            return { success: false, message: "提示：請使用 count() 函數來統計出現次數！" };
        }
        if (!output.includes("假新聞")) {
            return { success: false, message: "提示：標題中出現了 3 次震驚，應該要印出疑似假新聞喔！" };
        }
        return { success: true };
    }
};
