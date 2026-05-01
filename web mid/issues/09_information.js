window.courseData = window.courseData || {};
window.courseData['09_information'] = {
    title: "資訊教育：惡意留言過濾器",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                網路霸凌常對人造成心靈創傷。為了打造友善社群，我們需要自動偵測並過濾包含仇恨言論的留言。
            </div>
            
            <p class="text-sm">檢查留言中是否包含禁止關鍵字 "笨蛋"，如果有則印出 "攔截成功"。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>留言變數 <code>comment = "你是個笨蛋！"</code>。</li>
                    <li>使用 <code>if "笨蛋" in comment:</code></li>
                    <li>印出 <code>"攔截成功"</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes(" in ")) {
            return { success: false, message: "提示：請使用 in 運算子來檢查字串內容！" };
        }
        if (!output.includes("攔截成功")) {
            return { success: false, message: "提示：留言中包含禁止詞，應該要印出攔截成功喔！" };
        }
        return { success: true };
    }
};
