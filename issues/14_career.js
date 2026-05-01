window.courseData = window.courseData || {};
window.courseData['14_career'] = {
    title: "生涯規劃：職涯技能適配度",
    content: `
        <div class="space-y-4">
            <div class="bg-indigo-900/30 p-3 rounded border border-indigo-500/50 text-xs">
                <p class="font-bold mb-1"><i class="fa-solid fa-circle-info"></i> 議題背景：</p>
                了解自己的技能並與職業需求對比，是職涯規劃的第一步。
            </div>
            
            <p class="text-sm">計算你有多少項技能符合目標職業的需求。</p>

            <div class="bg-blue-900/20 border-l-4 border-accent p-3">
                <p class="font-bold text-accent mb-1 text-sm">🎮 你的任務：</p>
                <ul class="text-xs list-decimal pl-4 space-y-1">
                    <li>建立你的技能清單 <code>my_skills = ["Python", "English"]</code>。</li>
                    <li>建立職位需求清單 <code>job_needs = ["Python", "English", "C++"]</code>。</li>
                    <li>計算有多少重複項，並印出結果 <code>2</code>。</li>
                </ul>
            </div>
        </div>
    `,
    validator: function(code, output) {
        if (!output.includes("2")) {
            return { success: false, message: "提示：你有兩項技能 (Python, English) 符合需求喔！" };
        }
        return { success: true };
    }
};
