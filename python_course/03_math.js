window.courseData = window.courseData || {};
window.courseData['py_03_math'] = {
    title: "數學運算與優先順序",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50">
                <p class="text-sm font-bold text-indigo-300 mb-1"><i class="fa-solid fa-calculator"></i> 算術運算子</p>
                <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-300">
                    <div><code>+</code> 加法</div>
                    <div><code>-</code> 減法</div>
                    <div><code>*</code> 乘法</div>
                    <div><code>/</code> 除法 (結果為浮點數)</div>
                    <div><code>//</code> 整除 (無條件捨去)</div>
                    <div><code>%</code> 取餘數 (Modulo)</div>
                    <div><code>**</code> 次方 (Power)</div>
                </div>
            </div>

            <div class="bg-[#22272e] p-4 rounded-lg border border-[#444c56]">
                <h3 class="text-accent font-semibold mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-sort-numeric-down"></i> 運算優先順序 (PEMDAS)
                </h3>
                <p class="text-xs text-gray-300 mb-2">Python 遵循數學規則：</p>
                <ol class="text-[10px] text-gray-400 space-y-1 list-decimal pl-4">
                    <li>括號 <code>()</code> 最高優先。</li>
                    <li>次方 <code>**</code>。</li>
                    <li>乘 <code>*</code>、除 <code>/</code>、取餘數 <code>%</code>。</li>
                    <li>加 <code>+</code>、減 <code>-</code>。</li>
                </ol>
            </div>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 flex items-center gap-2">
                    <i class="fa-solid fa-flask"></i> 實驗室：
                </p>
                <p class="text-xs text-gray-300 mb-2">計算 10 除以 3 的<b>餘數</b>是多少？</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>使用 <code>%</code> 運算子計算 <code>10 % 3</code>。</li>
                    <li>使用 <code>print()</code> 顯示結果。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!code.includes("%")) {
            return { success: false, message: "提示：請使用 % 運算子來取餘數喔！" };
        }
        if (!output.includes("1")) {
            return { success: false, message: "提示：10 除以 3 的餘數應該是 1。" };
        }
        return { success: true };
    }
};
