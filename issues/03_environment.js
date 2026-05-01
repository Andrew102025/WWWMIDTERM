window.courseData = window.courseData || {};
window.courseData['03_environment'] = {
    title: "環境教育：海平面上升預測",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                全球升溫導致冰川融化。科學家預測，如果海平面上升超過 200 公分，許多沿海城市將消失。
            </div>
            
            <p class="text-sm">請使用 <code>while</code> 迴圈計算，若每年上升 15 公分，幾年後會突破安全紅線？</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>起始高度 <code>sea_level = 0</code>，年份 <code>years = 0</code>。</li>
                    <li>使用 <code>while sea_level < 200:</code></li>
                    <li>迴圈內：<code>sea_level += 15</code>，且 <code>years += 1</code>。</li>
                    <li>迴圈結束後印出 <code>years</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("while")) {
            return { success: false, message: "提示：這題需要使用 while 迴圈來進行連續計算！" };
        }
        if (!output.includes("14")) {
            return { success: false, message: "提示：計算結果應該是 14 年後喔！" };
        }
        return { success: true };
    }
};
