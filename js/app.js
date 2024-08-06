document.addEventListener("DOMContentLoaded", function () {
  const mainPage = document.getElementById("main-page");
  const testPage = document.getElementById("qna-page");
  const resultPage = document.getElementById("result-page");

  const form = document.getElementById("lifestyle-test-form");
  const questionContainer = document.getElementById("question-container");

  const resultContainer = document.getElementById("result");

  const startButton = document.getElementById("start-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  const shareButton = document.querySelector(".kakao");
  const langSwitch = document.getElementById("lang-switch");
  const statusBar = document.querySelector(".statusBar");

  let currentQuestionIndex = 0;
  let responses = [];
  let language = "ko"; // Default language

  function updateTexts() {
    document.getElementById("page-title").textContent =
      language === "ko"
        ? "생활 습관으로 보는 당신의 성격은?"
        : "What is your personality based on your lifestyle habits?";

    document.getElementById("main-title").textContent =
      language === "ko"
        ? "생활 습관으로 보는 당신의 성격은?"
        : "What is your personality based on your lifestyle habits?";

    document.getElementById("main-description").innerHTML =
      language === "ko"
        ? '생활 습관으로 보는 성격 유형 테스트에 오신 것을 환영합니다!<br>매일 매일 반복되는 행동을 통해 성격을 파악해보세요!<br>여러분의 생활 습관을 이해하는 데 도움이 될 것입니다.<br>"시작하기" 버튼을 클릭하여 테스트를 시작하세요.'
        : 'Welcome to the personality test based on lifestyle habits!<br>Discover your personality through the behaviors you repeat every day.<br>This test will help you understand your daily habits better.<br>Click the "Start" button to begin the test!';

    startButton.textContent = language === "ko" ? "시작하기" : "Start";
    prevButton.textContent = language === "ko" ? "이전" : "Previous";
    nextButton.textContent = language === "ko" ? "다음" : "Next";
    restartButton.textContent = language === "ko" ? "다시 시작하기" : "Restart";
    shareButton.textContent = language === "ko" ? "공유하기" : "Sharing";
  }

  function showQuestion(index) {
    const question = questions[language][index];
    questionContainer.innerHTML = `
      <div class="question">
        <p>${question.text}</p>
        <div class="options">
          <label>
            <input type="radio" name="response" value="Strongly Agree"> ${
              language === "ko" ? "매우 그렇다" : "Strongly Agree"
            }
          </label>
          <label>
            <input type="radio" name="response" value="Agree"> ${
              language === "ko" ? "그렇다" : "Agree"
            }
          </label>
          <label>
            <input type="radio" name="response" value="Neutral"> ${
              language === "ko" ? "보통" : "Neutral"
            }
          </label>
          <label>
            <input type="radio" name="response" value="Disagree"> ${
              language === "ko" ? "그렇지 않다" : "Disagree"
            }
          </label>
          <label>
            <input type="radio" name="response" value="Strongly Disagree"> ${
              language === "ko" ? "매우 그렇지 않다" : "Strongly Disagree"
            }
          </label>
        </div>
      </div>
    `;
    updateProgressBar();
  }

  function updateProgressBar() {
    const totalQuestions = questions[language].length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    statusBar.style.width = `${progress}%`;
  }

  function showResult() {
    // 각 타입에 대한 점수를 저장할 객체
    const typeScores = {
      Regular: 0,
      Flexible: 0,
      Adventurous: 0,
      Stable: 0,
    };

    // 응답에 따라 타입별 점수 계산
    responses.forEach((response) => {
      const question = questions[language].find((q) => q.id === response.id);
      let score = 0;

      // 응답의 값을 기반으로 점수 결정
      switch (response.response) {
        case "Strongly Agree":
        case "매우 그렇다":
          score = 5;
          break;
        case "Agree":
        case "그렇다":
          score = 4;
          break;
        case "Neutral":
        case "보통":
          score = 3;
          break;
        case "Disagree":
        case "그렇지 않다":
          score = 2;
          break;
        case "Strongly Disagree":
        case "매우 그렇지 않다":
          score = 1;
          break;
      }

      // 해당 타입에 점수 추가
      typeScores[question.type] += score;
    });

    // 모든 점수가 최저점인 경우 확인
    const allLowestScores = Object.values(typeScores).every(
      (score) => score === (1 * responses.length) / 4
    );

    if (allLowestScores) {
      // 모든 항목이 최저점일 때 메시지 출력
      resultContainer.innerHTML = `<h1>${
        language === "ko"
          ? "모든 항목을 '매우 그렇지 않다'로 선택하였습니다.<br>테스트에 성실하게 참여해주세요."
          : "You selected 'Strongly Disagree' for all items.<br>Please participate sincerely in the test."
      }</h1>`;
      return;
    }

    // 가장 높은 점수를 가진 타입 찾기
    const maxScore = Math.max(...Object.values(typeScores));
    const highestTypes = Object.keys(typeScores).filter(
      (type) => typeScores[type] === maxScore
    );

    let resultType;
    if (highestTypes.length === 1) {
      resultType = highestTypes[0];
    } else {
      // 우선순위 설정
      const priority = ["Flexible", "Regular", "Adventurous", "Stable"];
      resultType = highestTypes.sort(
        (a, b) => priority.indexOf(a) - priority.indexOf(b)
      )[0];
    }

    // 결과 정보 찾기
    const resultInfo = infoList[language].find((info) =>
      info.type.includes(resultType)
    );

    // 결과 페이지에 결과 출력
    resultContainer.innerHTML = `<h1>${
      language === "ko" ? "당신의 결과는?!" : "Your result is..."
    }</h1><h3>${resultInfo.name}<h3><h5>${resultInfo.title}</h5><p>${
      resultInfo.desc
    }</p>`;
  }

  // 시작 버튼
  function handleStartButtonClick() {
    mainPage.style.display = "none";
    testPage.style.display = "block";
    resultPage.style.display = "none";
    showQuestion(currentQuestionIndex);
  }

  // 이전 버튼
  function handlePrevButtonClick() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    } else {
      // 첫 번째 질문에서 "이전" 버튼 클릭 시 초기 페이지로 이동
      mainPage.style.display = "block";
      testPage.style.display = "none";
      resultPage.style.display = "none";
      updateTexts();
      statusBar.style.width = "0%"; // 진행 상태 바 초기화
    }
  }

  // 다음 버튼
  function handleNextButtonClick() {
    const selectedOption = form.querySelector('input[name="response"]:checked');
    if (selectedOption) {
      responses[currentQuestionIndex] = {
        id: questions[language][currentQuestionIndex].id,
        response: selectedOption.value,
      };
      if (currentQuestionIndex < questions[language].length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      } else {
        testPage.style.display = "none";
        resultPage.style.display = "block";
        showResult();
      }
    }
  }

  // 다시 시작 버튼
  function handleRestartButtonClick() {
    currentQuestionIndex = 0;
    responses = [];
    mainPage.style.display = "block";
    resultPage.style.display = "none";
    updateTexts();
    statusBar.style.width = "0%"; // Reset progress bar on restart
  }

  // 번역 버튼
  function handleLanguageSwitchClick(event) {
    event.preventDefault();
    language = language === "ko" ? "en" : "ko"; // Toggle language
    updateTexts();
    if (testPage.style.display === "block") {
      showQuestion(currentQuestionIndex); // Update questions if test page is visible
    }
  }

  startButton.addEventListener("click", handleStartButtonClick);
  prevButton.addEventListener("click", handlePrevButtonClick);
  nextButton.addEventListener("click", handleNextButtonClick);
  restartButton.addEventListener("click", handleRestartButtonClick);
  langSwitch.addEventListener("click", handleLanguageSwitchClick);

  updateTexts(); // Initialize texts based on default language
});
