window.courseData = window.courseData || {};
window.courseData['py_02_vars'] = {
    title: "變數與資料型態",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50">
                <p class="text-sm font-bold text-indigo-300 mb-1"><i class="fa-solid fa-box-open"></i> 什麼是變數 (Variable)？</p>
                <p class="text-xs text-gray-300 leading-relaxed">
                    你可以把變數想像成一個「標籤」或「盒子」。當我們寫 <code>name = "Andrew"</code> 時，就像是拿一個標籤貼在儲存空間上。
                    以後只要叫 <code>name</code>，Python 就知道你是指 "Andrew"。
                </p>
            </div>

            <div class="bg-[#22272e] p-4 rounded-lg border border-[#444c56]">
                <h3 class="text-accent font-semibold mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-list-check"></i> 變數命名規則
                </h3>
                <ul class="text-[10px] text-gray-300 space-y-1 list-disc pl-4">
                    <li><b>開頭：</b> 必須是字母或底線，不能以數字開頭。</li>
                    <li><b>內容：</b> 只能包含字母、數字與底線 (A-Z, 0-9, _)。</li>
                    <li><b>不能使用保留字：</b> 例如不能把變數命名為 <code>print</code> 或 <code>if</code>。</li>
                    <li><b>風格：</b> Python 慣用 <code>snake_case</code> (底線命名法)。</li>
                </ul>
            </div>

            <div class="bg-green-900/20 p-3 rounded border border-green-500/30">
                <p class="text-xs font-bold text-green-300 mb-1">常用的資料型態：</p>
                <div class="grid grid-cols-2 gap-2 text-[10px]">
                    <div class="bg-black/20 p-1.5 rounded"><b>int</b> (整數): <code>100</code>, <code>-5</code></div>
                    <div class="bg-black/20 p-1.5 rounded"><b>float</b> (浮點數): <code>3.14</code>, <code>0.5</code></div>
                    <div class="bg-black/20 p-1.5 rounded"><b>str</b> (字串): <code>"Hello"</code></div>
                    <div class="bg-black/20 p-1.5 rounded"><b>bool</b> (布林): <code>True</code>, <code>False</code></div>
                </div>
            </div>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 flex items-center gap-2">
                    <i class="fa-solid fa-bullseye"></i> 你的任務：
                </p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立一個名為 <code>magic_power</code> 的變數並賦值 100。</li>
                    <li>使用 <code>print(magic_power)</code> 印出它。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("magic_power")) {
            return { success: false, message: "提示：別忘了建立名稱為 magic_power 的變數喔！" };
        }
        if (!output.includes("100")) {
            return { success: false, message: "提示：變數的值應該要是 100。" };
        }
        return { success: true };
    }
};
