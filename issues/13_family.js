window.courseData = window.courseData || {};
window.courseData['13_family'] = {
    title: "家庭教育：家庭資源公平分配",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                健康的家庭財務規劃能減少衝突。專家建議教育費應佔收入的 10-20%。
            </div>
            
            <p class="text-sm">計算教育支出是否符合建議比例。收入 1000，教育支出 150。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li><code>income = 1000</code>, <code>edu = 150</code>。</li>
                    <li>計算百分比 <code>percent = (edu / income) * 100</code>。</li>
                    <li>如果 <code>percent >= 10</code>，印出 <code>"符合教育投資標準"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("符合")) {
            return { success: false, message: "提示：15% 是符合標準的喔！" };
        }
        return { success: true };
    }
};
