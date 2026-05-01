window.courseData = window.courseData || {};
window.courseData['01_gender'] = {
    title: "性別平等：薪資鴻溝分析",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                「同工不同酬」是全球職場常見的不公現象。當男性與女性在相同職位、相同能力的狀況下，若平均薪資存在明顯落差，即代表存在性別薪資鴻溝。
            </div>
            
            <p class="text-sm">請寫一個程式，計算兩位應徵者的薪資差額百分比，判斷是否超過不平等紅線。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>設定男性經理薪資 <code>male_salary = 1000</code>。</li>
                    <li>設定女性經理薪資 <code>female_salary = 850</code>。</li>
                    <li>計算落差百分比：<code>gap = (1000 - 850) / 1000 * 100</code>。</li>
                    <li>如果 <code>gap</code> 大於 10，印出 <code>"警示：存在薪資不平等"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("100")) {
            return { success: false, message: "提示：請計算出落差的百分比喔！" };
        }
        if (!output.includes("薪資不平等")) {
            return { success: false, message: "提示：根據計算，15% 的落差已經超過 10% 的警示線了！" };
        }
        return { success: true };
    }
};
