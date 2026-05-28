// 退役军人 AI 学习导航 — 精选资源库
// 维护原则:免费优先 / 真实存在 / 路径相关 / 不带货
// 字段说明:
//   stage    所属阶段 1-4
//   type     book(书)/ video(视频)/ doc(文档)/ course(课程)/ tool(工具)/ practice(练习)
//   level    入门 / 进阶 / 高阶
//   lang     zh / en
//   free     true=免费 / false=付费 / "freemium"=有免费版
//   why      为什么推荐(一句话,真实视角)

const RESOURCES = [
  // ========== STAGE 01:心态 + 计算机基础 ==========
  {
    stage: 1, name: "鸟哥的 Linux 私房菜",
    url: "https://linux.vbird.org/",
    type: "book", level: "入门", lang: "zh", free: true,
    why: "中文 Linux 圣经,免费在线阅读,从开机到 shell 全覆盖。"
  },
  {
    stage: 1, name: "MIT — The Missing Semester",
    url: "https://missing.csail.mit.edu/",
    type: "course", level: "入门", lang: "en",
    free: true,
    why: "MIT 补足'学校不教但你必须会'的:shell / git / vim / 调试。"
  },
  {
    stage: 1, name: "命令行的艺术",
    url: "https://github.com/jlevy/the-art-of-command-line",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "GitHub 高星,一页纸学完命令行核心 80%。"
  },
  {
    stage: 1, name: "Linux Journey",
    url: "https://linuxjourney.com/",
    type: "course", level: "入门", lang: "en", free: true,
    why: "交互式闯关学 Linux,英文阅读训练顺带完成。"
  },
  {
    stage: 1, name: "韩立刚 计算机网络(B站)",
    url: "https://www.bilibili.com/video/BV1c4411d7jb/",
    type: "video", level: "入门", lang: "zh", free: true,
    why: "B 站经典中文网络课,讲得糙但全,适合零基础。"
  },
  {
    stage: 1, name: "计算机网络:自顶向下方法",
    url: "https://gaia.cs.umass.edu/kurose_ross/index.php",
    type: "book", level: "进阶", lang: "en", free: false,
    why: "网络专业课圣经,考研 408 必备,中文版有售。"
  },
  {
    stage: 1, name: "Pro Git 中文版",
    url: "https://git-scm.com/book/zh/v2",
    type: "book", level: "入门", lang: "zh", free: true,
    why: "Git 官方书,免费中文版,版本管理一次学透。"
  },
  {
    stage: 1, name: "廖雪峰 Git 教程",
    url: "https://liaoxuefeng.com/books/git/introduction/index.html",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "中文 Git 入门最快路径,30 分钟能上手。"
  },
  {
    stage: 1, name: "Markdown 教程",
    url: "https://markdown.com.cn/",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "技术写作的最低限度。10 分钟学完终身受用。"
  },
  {
    stage: 1, name: "扇贝单词 / 不背单词",
    url: "https://www.shanbay.com/",
    type: "tool", level: "入门", lang: "zh", free: "freemium",
    why: "技术英语阅读关:每天 50 词,3 个月看英文文档不犯怵。"
  },
  {
    stage: 1, name: "Anki",
    url: "https://apps.ankiweb.net/",
    type: "tool", level: "入门", lang: "en", free: true,
    why: "间隔重复神器,背单词、记命令、记代码片段都靠它。"
  },
  {
    stage: 1, name: "VS Code",
    url: "https://code.visualstudio.com/",
    type: "tool", level: "入门", lang: "en", free: true,
    why: "免费、跨平台、插件生态最强的编辑器,从入门用到工作。"
  },

  // ========== STAGE 02:Python 编程筑基 ==========
  {
    stage: 2, name: "廖雪峰 Python 教程",
    url: "https://liaoxuefeng.com/books/python/introduction/index.html",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "中文 Python 入门最经典路径,免费,排版清爽。"
  },
  {
    stage: 2, name: "Harvard CS50P — Python",
    url: "https://cs50.harvard.edu/python/",
    type: "course", level: "入门", lang: "en", free: true,
    why: "哈佛 Python 公开课,作业有自动评测,全球最佳免费 Python 课之一。"
  },
  {
    stage: 2, name: "Python Crash Course(书)",
    url: "https://nostarch.com/python-crash-course-3rd-edition",
    type: "book", level: "入门", lang: "en", free: false,
    why: "Python 入门书全球销量第一,3 个项目带你做完(游戏/数据/Web)。"
  },
  {
    stage: 2, name: "Real Python",
    url: "https://realpython.com/",
    type: "doc", level: "进阶", lang: "en", free: "freemium",
    why: "Python 教程的'极客时间',免费文章已经够学一年。"
  },
  {
    stage: 2, name: "Python 官方文档",
    url: "https://docs.python.org/zh-cn/3/",
    type: "doc", level: "进阶", lang: "zh", free: true,
    why: "中文官方文档质量极高,从'查 API'升级到'读规范'。"
  },
  {
    stage: 2, name: "莫烦 Python(B站)",
    url: "https://mofanpy.com/",
    type: "video", level: "入门", lang: "zh", free: true,
    why: "Python / 数据 / ML 入门视频,中文免费,讲解节奏舒服。"
  },
  {
    stage: 2, name: "LeetCode",
    url: "https://leetcode.cn/",
    type: "practice", level: "进阶", lang: "zh", free: "freemium",
    why: "刷题练算法,Python 写起来最爽,大厂面试通行证。"
  },
  {
    stage: 2, name: "Codewars",
    url: "https://www.codewars.com/",
    type: "practice", level: "入门", lang: "en", free: true,
    why: "比 LeetCode 轻量的练习,从 8 段(最简单)一路打怪。"
  },
  {
    stage: 2, name: "pandas 官方教程",
    url: "https://pandas.pydata.org/docs/getting_started/index.html",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "数据处理的标准库,AI/数据岗都要会。"
  },
  {
    stage: 2, name: "requests 库",
    url: "https://requests.readthedocs.io/zh_CN/latest/",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "Python 调 HTTP 接口的事实标准,API 调用绕不开。"
  },
  {
    stage: 2, name: "FastAPI",
    url: "https://fastapi.tiangolo.com/zh/",
    type: "doc", level: "进阶", lang: "zh", free: true,
    why: "现代 Python Web 框架,写 API 服务又快又规范。"
  },
  {
    stage: 2, name: "Python Tutor 可视化",
    url: "https://pythontutor.com/",
    type: "tool", level: "入门", lang: "en", free: true,
    why: "看代码逐行执行的内存变化,新手理解作用域/引用神器。"
  },

  // ========== STAGE 03:AI 工程化入门 ==========
  {
    stage: 3, name: "吴恩达 机器学习专项课",
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
    type: "course", level: "入门", lang: "en", free: "freemium",
    why: "ML 入门全球第一课,可旁听免费,中文字幕齐全。"
  },
  {
    stage: 3, name: "3Blue1Brown 神经网络系列",
    url: "https://www.3blue1brown.com/topics/neural-networks",
    type: "video", level: "入门", lang: "en", free: true,
    why: "用动画讲清神经网络/反向传播,看完直觉建立。"
  },
  {
    stage: 3, name: "Andrej Karpathy — Zero to Hero",
    url: "https://karpathy.ai/zero-to-hero.html",
    type: "video", level: "进阶", lang: "en", free: true,
    why: "前 Tesla AI 总监带你从 0 手写 GPT,神课。"
  },
  {
    stage: 3, name: "Hugging Face Course",
    url: "https://huggingface.co/learn",
    type: "course", level: "进阶", lang: "en", free: true,
    why: "全球最大开源 AI 社区的免费课,LLM/扩散模型/Agent 全覆盖。"
  },
  {
    stage: 3, name: "DeepLearning.AI Short Courses",
    url: "https://www.deeplearning.ai/short-courses/",
    type: "course", level: "进阶", lang: "en", free: true,
    why: "吴恩达团队 1 小时短课,LangChain / RAG / Agent 全是免费精品。"
  },
  {
    stage: 3, name: "Anthropic Claude 官方文档",
    url: "https://docs.claude.com/",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "Claude API 一手资料,Prompt 工程指南是行业范本。"
  },
  {
    stage: 3, name: "OpenAI Cookbook",
    url: "https://cookbook.openai.com/",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "OpenAI 官方代码示例库,API 调用 / RAG / Agent 实战代码。"
  },
  {
    stage: 3, name: "Anthropic Prompt Engineering Guide",
    url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "Claude 官方 Prompt 工程文档,行业最佳实践。"
  },
  {
    stage: 3, name: "LangChain 中文文档",
    url: "https://python.langchain.com/docs/introduction/",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "Agent / RAG 编排框架,虽然有争议但仍是事实标准。"
  },
  {
    stage: 3, name: "MCP 协议官方文档",
    url: "https://modelcontextprotocol.io/",
    type: "doc", level: "高阶", lang: "en", free: true,
    why: "Anthropic 推的 AI 工具协议,2026 年正在快速成为标准。"
  },
  {
    stage: 3, name: "Claude Code 官方",
    url: "https://docs.claude.com/en/docs/claude-code/overview",
    type: "tool", level: "进阶", lang: "en", free: false,
    why: "Anthropic 官方 CLI Coding Agent,现代 AI 工程必学工具。"
  },
  {
    stage: 3, name: "Cursor",
    url: "https://cursor.com/",
    type: "tool", level: "入门", lang: "en", free: "freemium",
    why: "AI 编辑器,有免费额度,新手建立 AI 编程感觉的最快路径。"
  },
  {
    stage: 3, name: "Ollama — 本地跑大模型",
    url: "https://ollama.com/",
    type: "tool", level: "进阶", lang: "en", free: true,
    why: "一行命令本地跑 Llama / Qwen,理解大模型部署的最低成本入口。"
  },
  {
    stage: 3, name: "Hugging Face Models",
    url: "https://huggingface.co/models",
    type: "tool", level: "进阶", lang: "en", free: true,
    why: "开源模型集散地,下载 / 微调 / 部署都从这里开始。"
  },
  {
    stage: 3, name: "李沐 — 动手学深度学习",
    url: "https://zh.d2l.ai/",
    type: "book", level: "进阶", lang: "zh", free: true,
    why: "中文深度学习教材最佳免费版,代码 + 数学 + 直觉三位一体。"
  },

  // ========== STAGE 04:AI 安全 / 网络安全 ==========
  {
    stage: 4, name: "PortSwigger Web Security Academy",
    url: "https://portswigger.net/web-security",
    type: "course", level: "入门", lang: "en", free: true,
    why: "Burp Suite 官方做的 Web 安全免费课,业内公认天花板。"
  },
  {
    stage: 4, name: "OWASP Top 10",
    url: "https://owasp.org/www-project-top-ten/",
    type: "doc", level: "入门", lang: "en", free: true,
    why: "Web 安全圣经,10 大漏洞每个安全工程师必背。"
  },
  {
    stage: 4, name: "OWASP LLM Top 10",
    url: "https://genai.owasp.org/llm-top-10/",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "大模型应用 10 大安全风险,AI 安全方向必读起点。"
  },
  {
    stage: 4, name: "TryHackMe",
    url: "https://tryhackme.com/",
    type: "practice", level: "入门", lang: "en", free: "freemium",
    why: "渗透入门最友好平台,有引导关卡,适合零基础。"
  },
  {
    stage: 4, name: "HackTheBox",
    url: "https://www.hackthebox.com/",
    type: "practice", level: "进阶", lang: "en", free: "freemium",
    why: "渗透实战平台,简历亮点的硬通货。"
  },
  {
    stage: 4, name: "CTF Wiki",
    url: "https://ctf-wiki.org/",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "中文 CTF 知识库,涵盖 Web / Pwn / 逆向 / 密码 / 杂项。"
  },
  {
    stage: 4, name: "攻防世界",
    url: "https://adworld.xctf.org.cn/",
    type: "practice", level: "入门", lang: "zh", free: true,
    why: "国内 CTF 练习平台,新手区门槛低,中文环境友好。"
  },
  {
    stage: 4, name: "看雪学苑",
    url: "https://www.kanxue.com/",
    type: "doc", level: "进阶", lang: "zh", free: "freemium",
    why: "中文逆向 / 二进制安全社区天花板,免费帖子已经够学很久。"
  },
  {
    stage: 4, name: "Anthropic — 红队与安全",
    url: "https://www.anthropic.com/research#alignment",
    type: "doc", level: "高阶", lang: "en", free: true,
    why: "Anthropic 对齐与红队公开研究,AI 安全方向第一手资料。"
  },
  {
    stage: 4, name: "Lakera — Prompt Injection 学习",
    url: "https://gandalf.lakera.ai/",
    type: "practice", level: "入门", lang: "en", free: true,
    why: "闯关游戏:逐级越狱 GPT,直观感受 Prompt 注入。"
  },
  {
    stage: 4, name: "Awesome LLM Security(GitHub)",
    url: "https://github.com/corca-ai/awesome-llm-security",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "LLM 安全资源汇总,论文 / 工具 / 数据集一站式。"
  },
  {
    stage: 4, name: "Awesome AI Security(GitHub)",
    url: "https://github.com/RICSecLab/awesome-ai-security",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "AI 安全(模型/数据/系统)综合资源库,GitHub 高星。"
  },
  {
    stage: 4, name: "FreeBuf",
    url: "https://www.freebuf.com/",
    type: "doc", level: "入门", lang: "zh", free: true,
    why: "国内最大安全资讯社区,跟踪行业动态。"
  },
  {
    stage: 4, name: "MITRE ATT&CK",
    url: "https://attack.mitre.org/",
    type: "doc", level: "进阶", lang: "en", free: true,
    why: "攻击技术全球标准框架,蓝队/红队都要看。"
  },
  {
    stage: 4, name: "Kali Linux 官方文档",
    url: "https://www.kali.org/docs/",
    type: "doc", level: "入门", lang: "en", free: true,
    why: "渗透测试发行版官方文档,工具链一次理顺。"
  },
  {
    stage: 4, name: "信息安全工程师 — 中级软考",
    url: "https://www.ruankao.org.cn/",
    type: "course", level: "进阶", lang: "zh", free: false,
    why: "国家级中级证书,体制内/国企/事业编含金量足,退役军人加分场景。"
  },
];

const STAGE_META = {
  1: { code: "01", title: "心态 + 计算机基础", color: "army" },
  2: { code: "02", title: "Python 编程筑基", color: "army" },
  3: { code: "03", title: "AI 工程化入门", color: "army" },
  4: { code: "04", title: "AI 安全 / 网络安全", color: "army" },
};

const TYPE_LABEL = {
  book: "书",
  video: "视频",
  doc: "文档",
  course: "课程",
  tool: "工具",
  practice: "练习",
};

const LEVEL_COLOR = {
  "入门": "bg-army-100 text-army-800",
  "进阶": "bg-sand-200 text-army-900",
  "高阶": "bg-army-700 text-sand-50",
};
