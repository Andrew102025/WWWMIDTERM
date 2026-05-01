window.courseData = window.courseData || {};
window.courseData['19_indigenous'] = {
    title: "原住民族教育：圖騰圖案生成",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                許多原住民族的編織圖騰都具有高度的數學規律與幾何美感。我們可以用迴圈來模擬這種重複出現的規律。
            </div>
            
            <p class="text-sm">使用巢狀迴圈印出一個 3x3 的圖騰方陣（例如使用 ★ 符號）。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>使用巢狀迴圈 <code>for i in range(3):</code> 與 <code>for j in range(3):</code></li>
                    <li>每次執行印出 <code>"★"</code> (可以搭配 <code>end=""</code> 讓它在同一行)。</li>
                    <li>挑戰：如果只印出 9 個星號也可以通過！</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("for")) {
            return { success: false, message: "提示：請使用迴圈來生成規律圖案！" };
        }
        if (!output.includes("★")) {
            return { success: false, message: "提示：請印出圖騰符號 ★ 喔！" };
        }
        return { success: true };
    }
};
