import "./Phonetic.css";

export default function Phonetic(props) {
  function handleSpeak() {
    const utterance = new SpeechSynthesisUtterance(props.word);
    utterance.lang = "en-GB";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="phonetic">
      <span className="phonetic-text">/{props.phonetic}/</span>
      <button onClick={handleSpeak} className="speak-button" title="Listen">
        🔊
      </button>
    </div>
  );
}
