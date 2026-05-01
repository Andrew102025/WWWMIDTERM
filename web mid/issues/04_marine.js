window.courseData = window.courseData || {};
window.courseData['04_marine'] = {
    title: "海洋教育：漁獲限額管理",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                過度捕撈會讓海洋生態崩潰。每個漁場都有其「最大持續生產量 (MSY)」，超過此限制即為非法。
            </div>
            
            <p class="text-sm">寫一個程式檢查三艘漁船的漁獲總量是否違法（上限 1000 噸）。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立清單 <code>catches = [300, 450, 400]</code>。</li>
                    <li>使用 <code>sum(catches)</code> 計算總量。</li>
                    <li>如果總量大於 1000，印出 <code>"非法過度捕撈"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("sum(")) {
            return { success: false, message: "提示：使用 sum() 可以快速加總清單中的數值！" };
        }
        if (!output.includes("非法")) {
            return { success: false, message: "提示：總量是 1150 噸，已經違法了！" };
        }
        return { success: true };
    }
};
