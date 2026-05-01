window.courseData = window.courseData || {};
window.courseData['11_safety'] = {
    title: "安全教育：風險等級評估",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                職業安全領域中，風險是由「發生機率 (1-5)」乘以「嚴重程度 (1-5)」決定的。
            </div>
            
            <p class="text-sm">計算一項作業的風險分數。如果分數大於 15，印出 "停止作業，立即改善"。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>機率 <code>prob = 4</code>。</li>
                    <li>程度 <code>severity = 5</code>。</li>
                    <li>計算 <code>risk = prob * severity</code>。</li>
                    <li>如果 <code>risk > 15</code>，印出 <code>"停止作業"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("停止作業")) {
            return { success: false, message: "提示：20 分已經超過 15 分的門檻，應該要停止作業喔！" };
        }
        return { success: true };
    }
};
