window.courseData = window.courseData || {};
window.courseData['06_life'] = {
    title: "生命教育：器官捐贈配對",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                在移植手術中，血型配對是生命延續的關鍵。O 型是全適供血者，而 AB 型則是全適受血者。
            </div>
            
            <p class="text-sm">使用字典建立血型相容表，判斷目前的捐贈者是否能救助受贈者。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立字典 <code>compatibility = {"O": "所有血型", "A": "A, AB"}</code>。</li>
                    <li>設定 <code>donor_type = "O"</code>。</li>
                    <li>印出 <code>compatibility["O"]</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("{") || !code.includes(":")) {
            return { success: false, message: "提示：請使用花括號 {} 與冒號 : 來建立字典！" };
        }
        if (!output.includes("所有血型")) {
            return { success: false, message: "提示：輸出的結果應該是 O 型對應的相容血型喔！" };
        }
        return { success: true };
    }
};
