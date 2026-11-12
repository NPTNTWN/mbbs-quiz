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
            loadQuestion();
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
            document.getElementById("progress-fill").style.width = "100%";
            document.getElementById("stats-tracker").innerText = "Quiz Complete";
            document.getElementById("question-map").style.display = "none";
            document.querySelector(".nav-controls").style.display = "none";
            
            let percentage = Math.round((score / activeQuestions.length) * 100);
            
            container.innerHTML = `
                <div class="score-board">
                    <h2 style="font-size: 2em; margin-bottom: 10px;">Final Score: ${score} / ${activeQuestions.length}</h2>
                    <p style="font-size: 1.2em; color: #64748b;">You scored ${percentage}%</p>
                    <button class="nav-btn" style="margin-top:30px; font-size: 1.1em;" onclick="location.reload()">Restart Quiz</button>
                </div>
            `;
        }