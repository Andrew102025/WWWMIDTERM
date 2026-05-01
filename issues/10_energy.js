window.courseData = window.courseData || {};
window.courseData['10_energy'] = {
    title: "能源教育：綠能效益分析",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                能源轉型是減緩氣候變遷的重點。太陽能板的產能會受到天氣係數影響。
            </div>
            
            <p class="text-sm">計算太陽能板在陰天 (係數 0.6) 的實際發電量 (基礎電量 500)。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li><code>base_power = 500</code>。</li>
                    <li><code>weather_factor = 0.6</code>。</li>
                    <li>計算並印出 <code>base_power * weather_factor</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("300")) {
            return { success: false, message: "提示：計算結果應該是 300 喔 (500 * 0.6)！" };
        }
        return { success: true };
    }
};
