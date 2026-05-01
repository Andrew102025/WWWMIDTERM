window.courseData = window.courseData || {};
window.courseData['18_international'] = {
    title: "國際教育：全球貿易平衡分析",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                國際貿易中，出口大於進口稱為「貿易順差」，反之則為「貿易逆差」。這反映了一個國家的經濟競爭力。
            </div>
            
            <p class="text-sm">判斷目前的貿易狀態。出口 800 億，進口 900 億。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li><code>export_val = 800</code>, <code>import_val = 900</code>。</li>
                    <li>如果 <code>export_val < import_val</code>，印出 <code>"呈現貿易逆差"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("逆差")) {
            return { success: false, message: "提示：進口大於出口，應該是貿易逆差喔！" };
        }
        return { success: true };
    }
};
