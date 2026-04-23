// Get field
const params = new URLSearchParams(window.location.search);
const field = params.get("field") || "Machine Learning";

// Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// 🔥 FULL QUESTION DATABASE (10 EACH)
const questionsDB = {
  "Machine Learning": [
    {"q":"ML stands for?","options":["Machine Learning","Markup Language","Memory Logic","None"],"answer":"Machine Learning"},
    {"q":"Best language for ML?","options":["Python","HTML","CSS","SQL"],"answer":"Python"},
    {"q":"ML is part of?","options":["AI","Web","OS","DB"],"answer":"AI"},
    {"q":"TensorFlow is?","options":["Library","Game","App","None"],"answer":"Library"},
    {"q":"Supervised learning uses?","options":["Labeled data","None","Game","App"],"answer":"Labeled data"},
    {"q":"Unsupervised learning?","options":["No labels","Labels","Game","None"],"answer":"No labels"},
    {"q":"Regression is used for?","options":["Prediction","Game","App","None"],"answer":"Prediction"},
    {"q":"Classification means?","options":["Grouping","Game","App","None"],"answer":"Grouping"},
    {"q":"Overfitting means?","options":["Too complex","Too simple","None","Game"],"answer":"Too complex"},
    {"q":"KNN is?","options":["Algorithm","Language","Tool","Game"],"answer":"Algorithm"},
    {"q":"Data is used for?","options":["Training","Game","App","None"],"answer":"Training"},
    {"q":"Model predicts?","options":["Output","Input","None","Game"],"answer":"Output"},
    {"q":"Feature means?","options":["Input variable","Game","App","None"],"answer":"Input variable"},
    {"q":"Dataset is?","options":["Collection of data","Game","None","App"],"answer":"Collection of data"},
    {"q":"Deep learning uses?","options":["Neural networks","Game","App","None"],"answer":"Neural networks"},
    {"q":"Training phase?","options":["Learning","Game","App","None"],"answer":"Learning"},
    {"q":"Testing phase?","options":["Evaluation","Game","App","None"],"answer":"Evaluation"},
    {"q":"Loss function?","options":["Error measure","Game","App","None"],"answer":"Error measure"},
    {"q":"Accuracy means?","options":["Correct predictions","Game","App","None"],"answer":"Correct predictions"},
    {"q":"Clustering is?","options":["Grouping data","Game","App","None"],"answer":"Grouping data"}
  ],

  "Web Development": [
    {"q":"HTML stands for?","options":["Hyper Text Markup Language","None","Tool","App"],"answer":"Hyper Text Markup Language"},
    {"q":"CSS used for?","options":["Styling","Logic","DB","None"],"answer":"Styling"},
    {"q":"JS is?","options":["Programming","Game","None","App"],"answer":"Programming"},
    {"q":"Frontend uses?","options":["HTML","Python","C++","None"],"answer":"HTML"},
    {"q":"Backend example?","options":["Node.js","CSS","HTML","None"],"answer":"Node.js"},
    {"q":"React is?","options":["Library","Language","OS","None"],"answer":"Library"},
    {"q":"DOM means?","options":["Document Object Model","None","App","Game"],"answer":"Document Object Model"},
    {"q":"API is?","options":["Interface","Game","App","None"],"answer":"Interface"},
    {"q":"CSS property?","options":["color","run","game","None"],"answer":"color"},
    {"q":"JS runs in?","options":["Browser","CPU","DB","None"],"answer":"Browser"},
    {"q":"HTTP is?","options":["Protocol","Game","App","None"],"answer":"Protocol"},
    {"q":"URL is?","options":["Address","Game","App","None"],"answer":"Address"},
    {"q":"Framework?","options":["Tool","Game","App","None"],"answer":"Tool"},
    {"q":"Bootstrap?","options":["CSS framework","Game","App","None"],"answer":"CSS framework"},
    {"q":"Git is?","options":["Version control","Game","App","None"],"answer":"Version control"},
    {"q":"JSON?","options":["Data format","Game","App","None"],"answer":"Data format"},
    {"q":"Flexbox?","options":["Layout","Game","App","None"],"answer":"Layout"},
    {"q":"Grid?","options":["Layout","Game","App","None"],"answer":"Layout"},
    {"q":"Form?","options":["Input","Game","App","None"],"answer":"Input"},
    {"q":"SEO?","options":["Optimization","Game","App","None"],"answer":"Optimization"}
  ],

  "Cyber Security": [
    {"q":"Ethical hacking?","options":["Legal hacking","Illegal","Game","None"],"answer":"Legal hacking"},
    {"q":"Firewall is?","options":["Security system","Game","App","None"],"answer":"Security system"},
    {"q":"Phishing?","options":["Attack","Game","App","None"],"answer":"Attack"},
    {"q":"VPN?","options":["Secure network","Game","App","None"],"answer":"Secure network"},
    {"q":"Malware?","options":["Virus","Game","App","None"],"answer":"Virus"},
    {"q":"Encryption?","options":["Secure data","Game","App","None"],"answer":"Secure data"},
    {"q":"2FA?","options":["Two factor","Game","App","None"],"answer":"Two factor"},
    {"q":"SQL injection?","options":["Attack","Game","App","None"],"answer":"Attack"},
    {"q":"Password strength?","options":["Strong","Weak","Game","None"],"answer":"Strong"},
    {"q":"Antivirus?","options":["Security tool","Game","App","None"],"answer":"Security tool"},
    {"q":"Trojan?","options":["Malware","Game","App","None"],"answer":"Malware"},
    {"q":"Spyware?","options":["Tracking malware","Game","App","None"],"answer":"Tracking malware"},
    {"q":"Brute force?","options":["Attack","Game","App","None"],"answer":"Attack"},
    {"q":"Hacker?","options":["Security expert","Game","App","None"],"answer":"Security expert"},
    {"q":"Patch?","options":["Fix","Game","App","None"],"answer":"Fix"},
    {"q":"Threat?","options":["Risk","Game","App","None"],"answer":"Risk"},
    {"q":"Risk?","options":["Chance of attack","Game","App","None"],"answer":"Chance of attack"},
    {"q":"Exploit?","options":["Attack method","Game","App","None"],"answer":"Attack method"},
    {"q":"Botnet?","options":["Network attack","Game","App","None"],"answer":"Network attack"},
    {"q":"Zero-day?","options":["Unknown bug","Game","App","None"],"answer":"Unknown bug"}
  ],

  "Data Science": [
    {"q":"DS uses?","options":["Python","HTML","CSS","None"],"answer":"Python"},
    {"q":"Pandas?","options":["Data tool","Game","App","None"],"answer":"Data tool"},
    {"q":"NumPy?","options":["Math lib","Game","App","None"],"answer":"Math lib"},
    {"q":"Matplotlib?","options":["Visualization","Game","App","None"],"answer":"Visualization"},
    {"q":"CSV?","options":["File","Game","App","None"],"answer":"File"},
    {"q":"EDA?","options":["Analysis","Game","App","None"],"answer":"Analysis"},
    {"q":"Dataset?","options":["Data collection","Game","App","None"],"answer":"Data collection"},
    {"q":"Cleaning?","options":["Fix data","Game","App","None"],"answer":"Fix data"},
    {"q":"Big data?","options":["Large data","Game","App","None"],"answer":"Large data"},
    {"q":"Model?","options":["Prediction tool","Game","App","None"],"answer":"Prediction tool"},
    {"q":"Feature?","options":["Variable","Game","App","None"],"answer":"Variable"},
    {"q":"Target?","options":["Output","Game","App","None"],"answer":"Output"},
    {"q":"Training?","options":["Learning","Game","App","None"],"answer":"Learning"},
    {"q":"Testing?","options":["Evaluation","Game","App","None"],"answer":"Evaluation"},
    {"q":"Accuracy?","options":["Correctness","Game","App","None"],"answer":"Correctness"},
    {"q":"Regression?","options":["Prediction","Game","App","None"],"answer":"Prediction"},
    {"q":"Classification?","options":["Group","Game","App","None"],"answer":"Group"},
    {"q":"Cluster?","options":["Group","Game","App","None"],"answer":"Group"},
    {"q":"Visualization?","options":["Charts","Game","App","None"],"answer":"Charts"},
    {"q":"Insight?","options":["Conclusion","Game","App","None"],"answer":"Conclusion"}
  ],
  
"App Development": [
{"q":"Android uses?","options":["Java/Kotlin","HTML","CSS","None"],"answer":"Java/Kotlin"},
{"q":"iOS uses?","options":["Swift","C","HTML","None"],"answer":"Swift"},
{"q":"UI means?","options":["User Interface","None","Game","App"],"answer":"User Interface"},
{"q":"UX means?","options":["User Experience","None","Game","App"],"answer":"User Experience"},
{"q":"APK file?","options":["Android app","Game","OS","None"],"answer":"Android app"},
{"q":"Play Store?","options":["App store","Game","OS","None"],"answer":"App store"},
{"q":"Firebase?","options":["Backend service","Game","OS","None"],"answer":"Backend service"},
{"q":"API used for?","options":["Connect data","Game","Run","None"],"answer":"Connect data"},
{"q":"SDK?","options":["Dev kit","Game","App","None"],"answer":"Dev kit"},
{"q":"Debugging?","options":["Fix errors","Run","Delete","None"],"answer":"Fix errors"},
{"q":"Emulator?","options":["Virtual device","Game","App","None"],"answer":"Virtual device"},
{"q":"Layout?","options":["UI structure","Game","App","None"],"answer":"UI structure"},
{"q":"Widget?","options":["UI component","Game","App","None"],"answer":"UI component"},
{"q":"Intent?","options":["Communication","Game","App","None"],"answer":"Communication"},
{"q":"Activity?","options":["Screen","Game","App","None"],"answer":"Screen"},
{"q":"Fragment?","options":["UI part","Game","App","None"],"answer":"UI part"},
{"q":"Push notification?","options":["Alert","Game","App","None"],"answer":"Alert"},
{"q":"App lifecycle?","options":["App states","Game","App","None"],"answer":"App states"},
{"q":"Permissions?","options":["Access control","Game","App","None"],"answer":"Access control"},
{"q":"Deployment?","options":["Publish app","Game","App","None"],"answer":"Publish app"}
],

"Game Development": [
{"q":"Unity uses?","options":["C#","HTML","CSS","None"],"answer":"C#"},
{"q":"Unreal uses?","options":["C++","Python","HTML","None"],"answer":"C++"},
{"q":"Game engine?","options":["Tool","Game","App","None"],"answer":"Tool"},
{"q":"FPS?","options":["Frames per second","Game","App","None"],"answer":"Frames per second"},
{"q":"2D game?","options":["Flat","3D","None","App"],"answer":"Flat"},
{"q":"Physics engine?","options":["Real motion","Game","None","App"],"answer":"Real motion"},
{"q":"Assets?","options":["Game items","None","App","Run"],"answer":"Game items"},
{"q":"AI in games?","options":["NPC logic","None","App","Run"],"answer":"NPC logic"},
{"q":"Level design?","options":["Game layout","None","App","Run"],"answer":"Game layout"},
{"q":"Multiplayer?","options":["Online play","None","App","Run"],"answer":"Online play"},
{"q":"Sprite?","options":["2D image","Game","App","None"],"answer":"2D image"},
{"q":"Texture?","options":["Surface detail","Game","App","None"],"answer":"Surface detail"},
{"q":"Animation?","options":["Movement","Game","App","None"],"answer":"Movement"},
{"q":"Collider?","options":["Collision detect","Game","App","None"],"answer":"Collision detect"},
{"q":"Rendering?","options":["Display","Game","App","None"],"answer":"Display"},
{"q":"Shader?","options":["Graphics code","Game","App","None"],"answer":"Graphics code"},
{"q":"Camera?","options":["View","Game","App","None"],"answer":"View"},
{"q":"UI in games?","options":["HUD","Game","App","None"],"answer":"HUD"},
{"q":"Sound engine?","options":["Audio system","Game","App","None"],"answer":"Audio system"},
{"q":"Optimization?","options":["Improve performance","Game","App","None"],"answer":"Improve performance"}
],

"Cloud Computing": [
{"q":"Cloud means?","options":["Internet storage","None","Game","App"],"answer":"Internet storage"},
{"q":"AWS?","options":["Cloud service","Game","None","App"],"answer":"Cloud service"},
{"q":"IaaS?","options":["Infrastructure","None","Game","App"],"answer":"Infrastructure"},
{"q":"PaaS?","options":["Platform","None","Game","App"],"answer":"Platform"},
{"q":"SaaS?","options":["Software","None","Game","App"],"answer":"Software"},
{"q":"Server?","options":["Computer","None","Game","App"],"answer":"Computer"},
{"q":"Virtualization?","options":["Virtual systems","None","Game","App"],"answer":"Virtual systems"},
{"q":"Docker?","options":["Container tool","None","Game","App"],"answer":"Container tool"},
{"q":"Kubernetes?","options":["Orchestration","None","Game","App"],"answer":"Orchestration"},
{"q":"Cloud security?","options":["Protect data","None","Game","App"],"answer":"Protect data"},
{"q":"Scalability?","options":["Grow system","Game","App","None"],"answer":"Grow system"},
{"q":"Load balancing?","options":["Distribute traffic","Game","App","None"],"answer":"Distribute traffic"},
{"q":"Latency?","options":["Delay","Game","App","None"],"answer":"Delay"},
{"q":"Bandwidth?","options":["Data rate","Game","App","None"],"answer":"Data rate"},
{"q":"Region?","options":["Location","Game","App","None"],"answer":"Location"},
{"q":"Instance?","options":["Virtual server","Game","App","None"],"answer":"Virtual server"},
{"q":"Storage types?","options":["Block/Object","Game","App","None"],"answer":"Block/Object"},
{"q":"CDN?","options":["Fast delivery","Game","App","None"],"answer":"Fast delivery"},
{"q":"Backup?","options":["Data copy","Game","App","None"],"answer":"Data copy"},
{"q":"Disaster recovery?","options":["Restore system","Game","App","None"],"answer":"Restore system"}
],

"Data Analytics": [
{"q":"Excel used for?","options":["Data","Game","App","None"],"answer":"Data"},
{"q":"SQL?","options":["Query language","Game","None","App"],"answer":"Query language"},
{"q":"Dashboard?","options":["Data view","Game","None","App"],"answer":"Data view"},
{"q":"Power BI?","options":["Analytics tool","Game","None","App"],"answer":"Analytics tool"},
{"q":"Trend?","options":["Pattern","None","Game","App"],"answer":"Pattern"},
{"q":"Chart?","options":["Visual data","None","Game","App"],"answer":"Visual data"},
{"q":"Filter?","options":["Select data","None","Game","App"],"answer":"Select data"},
{"q":"Report?","options":["Summary","None","Game","App"],"answer":"Summary"},
{"q":"KPI?","options":["Performance metric","None","Game","App"],"answer":"Performance metric"},
{"q":"Data cleaning?","options":["Fix data","None","Game","App"],"answer":"Fix data"},
{"q":"Pivot table?","options":["Summarize data","Game","App","None"],"answer":"Summarize data"},
{"q":"ETL?","options":["Extract Transform Load","Game","App","None"],"answer":"Extract Transform Load"},
{"q":"Visualization?","options":["Charts","Game","App","None"],"answer":"Charts"},
{"q":"Correlation?","options":["Relation","Game","App","None"],"answer":"Relation"},
{"q":"Outlier?","options":["Extreme value","Game","App","None"],"answer":"Extreme value"},
{"q":"Mean?","options":["Average","Game","App","None"],"answer":"Average"},
{"q":"Median?","options":["Middle value","Game","App","None"],"answer":"Middle value"},
{"q":"Mode?","options":["Frequent value","Game","App","None"],"answer":"Frequent value"},
{"q":"Variance?","options":["Spread","Game","App","None"],"answer":"Spread"},
{"q":"Standard deviation?","options":["Dispersion","Game","App","None"],"answer":"Dispersion"}
],

"Artificial Intelligence": [
{"q":"AI stands for?","options":["Artificial Intelligence","None","Game","App"],"answer":"Artificial Intelligence"},
{"q":"AI uses?","options":["ML","HTML","CSS","None"],"answer":"ML"},
{"q":"NLP?","options":["Language processing","None","Game","App"],"answer":"Language processing"},
{"q":"Vision AI?","options":["Image detection","None","Game","App"],"answer":"Image detection"},
{"q":"Chatbot?","options":["AI assistant","None","Game","App"],"answer":"AI assistant"},
{"q":"Deep learning?","options":["Neural networks","None","Game","App"],"answer":"Neural networks"},
{"q":"Automation?","options":["Auto work","None","Game","App"],"answer":"Auto work"},
{"q":"Robotics?","options":["Machines","None","Game","App"],"answer":"Machines"},
{"q":"AI ethics?","options":["Rules","None","Game","App"],"answer":"Rules"},
{"q":"AI future?","options":["Automation","None","Game","App"],"answer":"Automation"},
{"q":"Agent?","options":["Decision maker","Game","App","None"],"answer":"Decision maker"},
{"q":"Dataset?","options":["Data","Game","App","None"],"answer":"Data"},
{"q":"Model?","options":["Prediction tool","Game","App","None"],"answer":"Prediction tool"},
{"q":"Training?","options":["Learning","Game","App","None"],"answer":"Learning"},
{"q":"Inference?","options":["Prediction","Game","App","None"],"answer":"Prediction"},
{"q":"Bias?","options":["Error","Game","App","None"],"answer":"Error"},
{"q":"Algorithm?","options":["Steps","Game","App","None"],"answer":"Steps"},
{"q":"Reinforcement learning?","options":["Reward based","Game","App","None"],"answer":"Reward based"},
{"q":"Speech recognition?","options":["Voice input","Game","App","None"],"answer":"Voice input"},
{"q":"Recommendation system?","options":["Suggest items","Game","App","None"],"answer":"Suggest items"}
],

"DevOps": [
{"q":"DevOps means?","options":["Dev+Ops","None","Game","App"],"answer":"Dev+Ops"},
{"q":"CI/CD?","options":["Automation","None","Game","App"],"answer":"Automation"},
{"q":"Docker?","options":["Container","None","Game","App"],"answer":"Container"},
{"q":"Kubernetes?","options":["Management","None","Game","App"],"answer":"Management"},
{"q":"Git?","options":["Version control","None","Game","App"],"answer":"Version control"},
{"q":"Pipeline?","options":["Automation flow","None","Game","App"],"answer":"Automation flow"},
{"q":"Monitoring?","options":["Track system","None","Game","App"],"answer":"Track system"},
{"q":"Cloud DevOps?","options":["Cloud+DevOps","None","Game","App"],"answer":"Cloud+DevOps"},
{"q":"Jenkins?","options":["CI tool","None","Game","App"],"answer":"CI tool"},
{"q":"Deploy?","options":["Release app","None","Game","App"],"answer":"Release app"},
{"q":"Build?","options":["Compile","Game","App","None"],"answer":"Compile"},
{"q":"Test?","options":["Check code","Game","App","None"],"answer":"Check code"},
{"q":"Release?","options":["Deliver","Game","App","None"],"answer":"Deliver"},
{"q":"Infrastructure as code?","options":["Automate infra","Game","App","None"],"answer":"Automate infra"},
{"q":"Configuration?","options":["Setup","Game","App","None"],"answer":"Setup"},
{"q":"Versioning?","options":["Track changes","Game","App","None"],"answer":"Track changes"},
{"q":"Rollback?","options":["Revert","Game","App","None"],"answer":"Revert"},
{"q":"Scaling?","options":["Increase capacity","Game","App","None"],"answer":"Increase capacity"},
{"q":"Alerting?","options":["Notify","Game","App","None"],"answer":"Notify"},
{"q":"Logging?","options":["Record events","Game","App","None"],"answer":"Record events"}
],

"Networking": [
{"q":"Network?","options":["Connected devices","None","Game","App"],"answer":"Connected devices"},
{"q":"IP address?","options":["Device ID","None","Game","App"],"answer":"Device ID"},
{"q":"Router?","options":["Connect networks","None","Game","App"],"answer":"Connect networks"},
{"q":"Switch?","options":["Local network","None","Game","App"],"answer":"Local network"},
{"q":"Protocol?","options":["Rules","None","Game","App"],"answer":"Rules"},
{"q":"HTTP?","options":["Web protocol","None","Game","App"],"answer":"Web protocol"},
{"q":"DNS?","options":["Name system","None","Game","App"],"answer":"Name system"},
{"q":"LAN?","options":["Local network","None","Game","App"],"answer":"Local network"},
{"q":"WAN?","options":["Wide network","None","Game","App"],"answer":"Wide network"},
{"q":"Firewall?","options":["Security","None","Game","App"],"answer":"Security"},
{"q":"Bandwidth?","options":["Speed","Game","App","None"],"answer":"Speed"},
{"q":"Latency?","options":["Delay","Game","App","None"],"answer":"Delay"},
{"q":"MAC address?","options":["Hardware ID","Game","App","None"],"answer":"Hardware ID"},
{"q":"OSI model?","options":["7 layers","Game","App","None"],"answer":"7 layers"},
{"q":"TCP?","options":["Reliable protocol","Game","App","None"],"answer":"Reliable protocol"},
{"q":"UDP?","options":["Fast protocol","Game","App","None"],"answer":"Fast protocol"},
{"q":"Subnet?","options":["Network division","Game","App","None"],"answer":"Network division"},
{"q":"Gateway?","options":["Network entry","Game","App","None"],"answer":"Network entry"},
{"q":"Packet?","options":["Data unit","Game","App","None"],"answer":"Data unit"},
{"q":"Ping?","options":["Check connection","Game","App","None"],"answer":"Check connection"}
]

}

// 🔥 FIXED LOGIC
let originalQuestions = questionsDB[field] || questionsDB["Machine Learning"];
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// 🔥 shuffle helper
function shuffleArray(arr){
    let newArr = [...arr]; // clone first

    for(let i = newArr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;

    // ✅ LIMIT TO 5 QUESTIONS
    questions = shuffleArray([...originalQuestions]).slice(0, 5);

    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let q = questions[currentQuestionIndex];
    questionElement.innerText = (currentQuestionIndex+1) + ". " + q.q;

    // ✅ shuffle options (MAIN FIX)
    let shuffledOptions = shuffleArray([...q.options]);

    shuffledOptions.forEach(opt=>{
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("btn");

        if(opt === q.answer){
            btn.dataset.correct = "true";
        }

        btn.onclick = selectAnswer;
        answerButtons.appendChild(btn);
    });
}

function resetState(){
    nextButton.style.display="none";
    answerButtons.innerHTML="";
}

function selectAnswer(e){
    const selected = e.target;
    const correct = selected.dataset.correct==="true";

    if(correct){
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(btn=>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled=true;
    });

    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerText = `Score: ${score} / ${questions.length}`;
    nextButton.innerText = "Restart";
    nextButton.style.display="block";
}

// 🔥 FIXED NEXT + RESTART
nextButton.onclick=()=>{

    // ✅ restart fix
    if(nextButton.innerText === "Restart"){
        startQuiz();
        return;
    }

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
};

startQuiz();
