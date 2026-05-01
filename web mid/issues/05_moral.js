window.courseData = window.courseData || {};
window.courseData['05_moral'] = {
    title: "品德教育：誠信信用評等",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                在社會信用體系中，誠實與負責的行為會累積信用點數。信用良好的人在社會中能獲得更多信任與資源。
            </div>
            
            <p class="text-sm">根據學生的行為紀錄（是非題），計算最後的誠信分數（每項 20 分）。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立行為紀錄清單 <code>behaviors = [True, False, True]</code> (True 代表誠實行為)。</li>
                    <li>使用 <code>for</code> 迴圈與變數 <code>score = 0</code>。</li>
                    <li>迴圈中：如果行為是 <code>True</code>，<code>score += 20</code>。</li>
                    <li>最後印出 <code>score</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("for") || !code.includes("+= 20")) {
            return { success: false, message: "提示：請使用迴圈來檢查每項行為並加分！" };
        }
        if (!output.includes("40")) {
            return { success: false, message: "提示：兩個 True 行為，總分應該是 40 分喔！" };
        }
        return { success: true };
    }
};
