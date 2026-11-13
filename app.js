// JAVASCRIPT LOGIC
        const ENABLE_SHUFFLE = false; 

        let currentQuestionIndex = 0; 
        let score = 0;                
        let activeQuestions = [];     

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function startQuiz() {
            activeQuestions = myQuestionBank.map(q => ({ ...q, userAnswer: null }));
            if (ENABLE_SHUFFLE) activeQuestions = shuffleArray(activeQuestions);
            buildQuestionMap();
            showStartScreen();   // the quiz now begins when the Start button is pressed
        };

        function buildQuestionMap() {
            const mapContainer = document.getElementById("question-map");
            mapContainer.innerHTML = ""; 
            for (let i = 0; i < activeQuestions.length; i++) {
                let btn = document.createElement("button");
                btn.className = "map-btn";
                btn.innerText = i + 1;
                btn.onclick = () => jumpToQuestion(i);
                mapContainer.appendChild(btn);
            }
        }

        function updateQuestionMapUI() {
            const mapBtns = document.getElementById("question-map").children;
            for (let i = 0; i < mapBtns.length; i++) {
                mapBtns[i].className = "map-btn"; 
                if (i === currentQuestionIndex) mapBtns[i].classList.add("active");
                
                let q = activeQuestions[i];
                if (q.userAnswer !== null) {
                    if (q.userAnswer === q.answerIndex) mapBtns[i].classList.add("answered-correct");
                    else mapBtns[i].classList.add("answered-incorrect");
                }
            }
        }

        function loadQuestion() {
            const container = document.getElementById("quiz-container");
            document.getElementById("prev-btn").disabled = (currentQuestionIndex === 0);
            
            if (currentQuestionIndex >= activeQuestions.length) {
                showFinalScore(container);
                return;
            }

            document.getElementById("stats-tracker").innerText = 
                `Question ${currentQuestionIndex + 1} / ${activeQuestions.length} | Score: ${score}`;
            
            let progressPercentage = (currentQuestionIndex / activeQuestions.length) * 100;
            document.getElementById("progress-fill").style.width = progressPercentage + "%";
            
            updateQuestionMapUI();

            const q = activeQuestions[currentQuestionIndex];
            let html = q.caseText ? `<div class="case-box">${q.caseText}</div>` : "";
if (q.images) {
    q.images.forEach(src => {
        html += `<a href="${src}" target="_blank"><img class="q-image" src="${src}" alt="Image not found: ${src}"></a>`;
    });
}
html += `<div class="question-text">${q.question}</div>`;       
            
            q.options.forEach((opt, index) => {
                let extraClass = "";
                if (q.userAnswer !== null) {
                    if (index === q.answerIndex) extraClass = "correct disabled"; 
                    else if (index === q.userAnswer) extraClass = "incorrect disabled"; 
                    else extraClass = "disabled";
                }
                html += `<button class="option-btn ${extraClass}" onclick="checkAnswer(this, ${index}, ${q.answerIndex})">${opt}</button>`;
            });
            
            let displayStyle = (q.userAnswer !== null) ? "block" : "none";
            html += `<div id="explanation-box" class="explanation" style="display: ${displayStyle}"><strong>Rationale:</strong> ${q.explanation}</div>`;
            
            container.innerHTML = html;
        }

        function checkAnswer(btn, selected, correct) {
            const q = activeQuestions[currentQuestionIndex];
            if (q.userAnswer !== null) return; 

            q.userAnswer = selected;
            const allBtns = document.querySelectorAll(".option-btn");
            allBtns.forEach(b => b.classList.add("disabled")); 
            document.getElementById("explanation-box").style.display = "block"; 

            if (selected === correct) {
                btn.classList.add("correct");
                score++; 
                document.getElementById("stats-tracker").innerText = 
                    `Question ${currentQuestionIndex + 1} / ${activeQuestions.length} | Score: ${score}`;
            } else {
                btn.classList.add("incorrect");
                allBtns[correct].classList.add("correct"); 
            }
            updateQuestionMapUI();
        }

        function nextQuestion() {
            if (currentQuestionIndex < activeQuestions.length) {
                currentQuestionIndex++;
                loadQuestion();
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        }

        function jumpToQuestion(index) {
            currentQuestionIndex = index;
            loadQuestion();
        }

function showFinalScore(container) {
    saveBestResult();      // <-- NEW LINE (saves your best score and time in this browser)
    stopTimer();
    document.getElementById("timer-row").style.display = "none";
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("stats-tracker").innerText = "Quiz Complete";
    document.getElementById("question-map").style.display = "none";
    document.querySelector(".nav-controls").style.display = "none";

    let percentage = Math.round((score / activeQuestions.length) * 100);

    // Time summary
    const avg = Math.round(elapsedSeconds / activeQuestions.length);
    let slowest = 0;
    questionSeconds.forEach((t, i) => { if (t > questionSeconds[slowest]) slowest = i; });

    container.innerHTML = `
        <div class="score-board">
            <h2 style="font-size: 2em; margin-bottom: 10px;">Final Score: ${score} / ${activeQuestions.length}</h2>
            <p style="font-size: 1.2em; color: #64748b;">You scored ${percentage}%</p>
            <div class="time-summary">
                <div><span>Total time</span><b>${formatTime(elapsedSeconds)}</b></div>
                <div><span>Average per question</span><b>${formatTime(avg)}</b></div>
                <div><span>Slowest question</span><b>#${slowest + 1} (${formatTime(questionSeconds[slowest])})</b></div>
            </div>
            <button class="nav-btn" style="margin-top:30px; font-size: 1.1em;" onclick="location.reload()">Restart Quiz</button>
        </div>
    `;
}
        

        // ======================== TIMER ========================
        let elapsedSeconds = 0;     // total time while the clock was running
        let timerId = null;         // the running clock (null = stopped)
        let isPaused = false;
        let questionSeconds = [];   // seconds spent on each question

        function formatTime(sec) {
            const h = Math.floor(sec / 3600);
            const m = Math.floor((sec % 3600) / 60);
            const s = sec % 60;
            const mm = String(m).padStart(2, "0");
            const ss = String(s).padStart(2, "0");
        return h > 0 ? h + ":" + mm + ":" + ss : mm + ":" + ss;
        }

        function startTimer() {
            if (timerId !== null) return;
            timerId = setInterval(() => {
                elapsedSeconds++;
                questionSeconds[currentQuestionIndex] = (questionSeconds[currentQuestionIndex] || 0) + 1;
                document.getElementById("timer-display").innerText = "⏱ " + formatTime(elapsedSeconds);
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerId);
            timerId = null;
        }

        function pauseQuiz() {      
            if (timerId === null || isPaused) return;
            stopTimer();
            isPaused = true;
            document.getElementById("pause-overlay").style.display = "flex";
        }

        function resumeQuiz() {     
            if (!isPaused) return;
            isPaused = false;
            document.getElementById("pause-overlay").style.display = "none";
            startTimer();
        }

        // Pause automatically when the tab is hidden (switch tab, minimize, lock the phone)
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) pauseQuiz();
        });

        // ===================== START SCREEN =====================
        function showStartScreen() {
            document.getElementById("question-map").style.display = "none";
            document.querySelector(".nav-controls").style.display = "none";
            document.getElementById("stats-tracker").innerText = activeQuestions.length + " questions";
            document.getElementById("quiz-container").innerHTML = `
                <div class="start-card">
                    <div class="start-count">${activeQuestions.length} questions</div>
                    <p class="start-text">The timer starts when you press Start. It pauses automatically if you leave this tab.</p>
                    <button class="nav-btn start-btn" onclick="beginQuiz()">Start</button>
                </div>`;
        }

        function beginQuiz() {
            document.getElementById("question-map").style.display = "";
            document.querySelector(".nav-controls").style.display = "";
            document.getElementById("timer-row").style.display = "flex";
            questionSeconds = activeQuestions.map(() => 0);
            loadQuestion();
            startTimer();
        }

 
// ============ BEST RESULT (saved in this browser only) ============
function saveBestResult() {
    try {
        // Don't save for papers that are still in progress (their question count will change)
        if (typeof chosenQuiz === "undefined" || chosenQuiz.status === "progress") return;
        const time = (typeof elapsedSeconds !== "undefined") ? elapsedSeconds : null;
        const key = "mbbsquiz:" + chosenQuiz.id;
        const old = JSON.parse(localStorage.getItem(key));
        const better = !old || score > old.score ||
            (score === old.score && time !== null && (old.time == null || time < old.time));
        if (better) {
            localStorage.setItem(key, JSON.stringify({ score: score, of: activeQuestions.length, time: time }));
        }
    } catch (e) { /* storage not available, ignore */ }
}        

        