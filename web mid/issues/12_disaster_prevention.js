window.courseData = window.courseData || {};
window.courseData['12_disaster_prevention'] = {
    title: "防災教育：救援物資優先級",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                災害發生時，資源有限，必須根據災區的嚴重程度進行排序，優先救援最需要的地方。
            </div>
            
            <p class="text-sm">將三區的災情等級（10 為最重）排序，並印出由重到輕的順序。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立清單 <code>levels = [3, 9, 5]</code>。</li>
                    <li>使用 <code>levels.sort(reverse=True)</code>。</li>
                    <li>印出 <code>levels</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("sort")) {
            return { success: false, message: "提示：請使用 sort() 函數來進行排序！" };
        }
        if (!output.includes("[9, 5, 3]")) {
            return { success: false, message: "提示：排序後的結果應該是從大到小 [9, 5, 3] 喔！" };
        }
        return { success: true };
    }
};
