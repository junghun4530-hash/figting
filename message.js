const MESSAGES = [
  "오늘도 여기까지 온 것만으로 충분히 잘하고 있어요.",
  "작은 한 걸음이 내일의 큰 변화를 만들어요.",
  "당신의 속도로 가도 괜찮아요. 멈추지만 않으면 돼요.",
  "오늘 하루도 당신답게, 당당하게 시작해 봐요.",
  "힘들었던 만큼 당신은 더 단단해지고 있어요.",
  "실수해도 괜찮아요. 배우는 중이라는 증거니까요.",
  "당신이 웃으면 주변도 함께 환해져요.",
  "지금 이 순간도 충분히 소중해요.",
  "걱정은 잠시 내려놓고, 숨 한 번 크게 쉬어 봐요.",
  "당신은 생각보다 훨씬 많은 것을 해내고 있어요.",
  "오늘의 노력은 반드시 어딘가에서 빛날 거예요.",
  "완벽하지 않아도 괜찮아요. 시작한 당신이 멋져요.",
  "좋은 일이 곧 당신에게 찾아올 거예요.",
  "스스로를 믿어 보세요. 당신에겐 그럴 힘이 있어요.",
  "오늘도 수고했어요. 당신을 진심으로 응원해요."
];

module.exports = (req, res) => {
  const raw = req.query && req.query.name;
  const value = Array.isArray(raw) ? raw[0] : raw;
  const name = (typeof value === "string" ? value.trim().slice(0, 20) : "") || "여러분";
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message });
};
