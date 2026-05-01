window.courseData = window.courseData || {};
window.courseData['17_outdoor'] = {
    title: "戶外教育：野外求生坡度計算",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                在野外登山時，了解路段的坡度能幫助判斷難度與體力消耗。
            </div>
            
            <p class="text-sm">計算坡度百分比（垂直高度 / 水平距離）。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>水平距離 <code>run = 100</code>。</li>
                    <li>垂直高度 <code>rise = 20</code>。</li>
                    <li>計算 <code>slope = (rise / run) * 100</code>。</li>
                    <li>印出 <code>"坡度為"</code>, <code>slope</code>, <code>"%"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("20")) {
            return { success: false, message: "提示：坡度計算結果應該要是 20% 喔！" };
        }
        return { success: true };
    }
};
