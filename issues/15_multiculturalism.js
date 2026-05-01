window.courseData = window.courseData || {};
window.courseData['15_multiculturalism'] = {
    title: "多元文化：族群多樣性分析",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                多元文化的融合能讓社區更有活力。我們可以使用程式來計算一個區域內有多少種不同的族群背景。
            </div>
            
            <p class="text-sm">使用 <code>set()</code> 來計算清單中「不重複」的族群數量。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>族群清單 <code>groups = ["A", "B", "A", "C", "B"]</code>。</li>
                    <li>使用 <code>unique_groups = set(groups)</code>。</li>
                    <li>印出 <code>len(unique_groups)</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("set(")) {
            return { success: false, message: "提示：請使用 set() 函數來移除重複項！" };
        }
        if (!output.includes("3")) {
            return { success: false, message: "提示：清單中總共有 3 種不同的族群喔！" };
        }
        return { success: true };
    }
};
