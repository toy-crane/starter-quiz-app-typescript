import React from "react";
import "./App.css";

function App() {
	const handleClick = (value: string) => {
		if (value === "스페이스 엑스") {
			alert("정답 👏👏👏");
		} else {
			alert("오답 😣😣😣");
		}
	};

	return (
		<div className="container">
			<div className="app">
				<div className="question-section">
					<h1 className="question-header">
						<span>1</span>/4
					</h1>
					<div className="question-text">
						일론 머스크의 우주 탐사 기업 이름은?
					</div>
				</div>
				<div className="answer-section">
					<button onClick={() => handleClick("스페이스 엑스")}>
						스페이스 엑스
					</button>
					<button onClick={() => handleClick("테슬라")}>테슬라</button>
					<button onClick={() => handleClick("스페이스 엑스")}>
						스페이스 엑스
					</button>
					<button onClick={() => handleClick("솔라시티")}>솔라시티</button>
				</div>
			</div>
		</div>
	);
}

export default App;
