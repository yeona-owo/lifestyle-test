const questions = {
  ko: [
    {
      id: 1,
      text: "나는 하루 일정을 미리 계획하는 것을 좋아한다.",
      type: "Regular",
    },
    {
      id: 3,
      text: "주말에 새로운 활동이나 장소를 탐험하는 것을 즐긴다.",
      type: "Adventurous",
    },
    {
      id: 2,
      text: "나는 예상치 못한 상황에서도 침착할 수 있다.",
      type: "Flexible",
    },
    {
      id: 4,
      text: "일상적인 업무를 고정된 일정에 따라 수행한다.",
      type: "Regular",
    },
    {
      id: 5,
      text: "나는 갑작스러운 변화를 쉽게 받아들인다.",
      type: "Flexible",
    },
    {
      id: 6,
      text: "나는 위험을 감수하는 것을 두려워하지 않는다.",
      type: "Adventurous",
    },
    {
      id: 7,
      text: "편안하고 익숙한 환경에서 생활하는 것을 좋아한다.",
      type: "Stable",
    },
    {
      id: 8,
      text: "계획보다는 상황에 따라 행동하는 것을 선호한다.",
      type: "Flexible",
    },

    {
      id: 9,
      text: "새로운 취미나 활동을 시도하는 것을 즐긴다.",
      type: "Adventurous",
    },
    { id: 10, text: "정기적으로 운동하거나 건강을 관리한다.", type: "Regular" },
    {
      id: 11,
      text: "예상치 못한 사건이 발생해도 스트레스를 받지 않는다.",
      type: "Stable",
    },
    { id: 12, text: "일상적인 루틴을 중요하게 생각한다.", type: "Stable" },
  ],
  en: [
    {
      id: 1,
      text: "I like to plan my daily schedule in advance.",
      type: "Regular",
    },
    {
      id: 2,
      text: "I can remain calm in unexpected situations.",
      type: "Flexible",
    },
    {
      id: 3,
      text: "I enjoy exploring new activities or places on weekends.",
      type: "Adventurous",
    },
    {
      id: 4,
      text: "I follow a fixed schedule for daily tasks.",
      type: "Regular",
    },
    { id: 5, text: "I easily accept sudden changes.", type: "Flexible" },
    { id: 6, text: "I am not afraid of taking risks.", type: "Adventurous" },
    {
      id: 7,
      text: "I like to live in a comfortable and familiar environment.",
      type: "Stable",
    },
    {
      id: 8,
      text: "I prefer to act according to the situation rather than sticking to a plan.",
      type: "Flexible",
    },
    {
      id: 9,
      text: "I enjoy trying out new hobbies or activities.",
      type: "Adventurous",
    },
    {
      id: 10,
      text: "I regularly exercise or manage my health.",
      type: "Regular",
    },
    {
      id: 11,
      text: "I do not get stressed when unexpected events occur.",
      type: "Stable",
    },
    {
      id: 12,
      text: "I consider having a daily routine to be important.",
      type: "Stable",
    },
  ],
};

const infoList = {
  ko: [
    {
      type: "Regular",
      title: "무엇이든 계획적으로 규칙에 맞게 생활하는 것이 중요해!",
      name: "규칙적인 성향",
      desc: "당신은 규칙적 생활을 중시하는 성향을 가지고 있어요. 하루 일정을 미리 계획하고, 일상적인 업무를 고정된 일정에 따라 수행하는 것을 좋아해요. 정기적으로 운동하거나 건강을 관리하며, 계획에 따라 체계적으로 행동하는 것이 당신의 특징입니다. 이러한 성향 덕분에 목표를 달성하는 데 있어 탁월한 능력을 발휘하며, 자신만의 루틴을 통해 안정감을 얻습니다.",
    },
    {
      type: "Flexible",
      title: "예상치 못한 상황에서도 침착함을 유지하는 당신!",
      name: "유연한 성향",
      desc: "당신은 유연한 생활을 중시하는 성향을 가지고 있어, 갑작스러운 변화나 예상치 못한 상황에서도 침착함을 유지할 수 있어요. 상황에 따라 행동하는 것을 선호하며, 변화를 두려워하지 않고 쉽게 받아들이는 능력이 있어요. 이런 성향 덕분에 스트레스 상황에서도 잘 대처하고, 다양한 상황에 유연하게 대응할 수 있습니다.",
    },
    {
      type: "Adventurous",
      title: "새로운 것에 도전하는 것을 즐기는 모험가!",
      name: "모험적인 성향",
      desc: "당신은 모험적 생활을 중시하는 성향을 가지고 있어, 주말이나 여가 시간에 새로운 활동이나 장소를 탐험하는 것을 즐겨요. 위험을 감수하는 것을 두려워하지 않으며, 새로운 취미나 활동을 시도하는 것을 좋아해요. 이러한 성향 덕분에 항상 새로운 경험을 추구하며, 삶에 대한 열정과 호기심을 유지할 수 있습니다.",
    },
    {
      type: "Stable",
      name: "편안하고 익숙한 환경을 중요하게 생각해!",
      name: "안정적인 성향",
      desc: "당신은 안정적 생활을 중시하는 생활을 중시하는 성향을 가지고 있어요. 편안하고 익숙한 환경에서 생활하는 것을 좋아하며, 일상적인 루틴을 중요하게 생각해요. 이러한 성향 덕분에 안정감과 안전을 추구하며, 예상 가능한 상황 속에서 최고의 능력을 발휘할 수 있습니다. 정해진 틀 안에서 자신만의 리듬을 유지하며, 편안한 생활을 지향합니다.",
    },
  ],
  en: [
    {
      type: "Regular",
      title: "You value living by plans and rules!",
      name: "Regular Type",
      desc: "You have a tendency to value a structured lifestyle. You like to plan your daily schedule in advance and perform routine tasks according to a fixed schedule. Regular exercise or health management is part of your routine, and you systematically follow plans. This tendency allows you to excel in achieving goals and provides a sense of stability through your personal routine.",
    },
    {
      type: "Flexible",
      title: "You stay calm even in unexpected situations!",
      name: "Flexible Type",
      desc: "You have a tendency to value flexibility in your lifestyle, allowing you to stay calm even in sudden changes or unexpected situations. You prefer to act according to the situation and have the ability to accept change without fear. This tendency helps you handle stress well and adapt flexibly to various situations.",
    },
    {
      type: "Adventurous",
      title: "An adventurer who enjoys new challenges!",
      name: "Adventurous Type",
      desc: "You have a tendency to value an adventurous lifestyle, enjoying exploring new activities or places during weekends or leisure time. You are not afraid to take risks and like trying new hobbies or activities. This tendency keeps you constantly seeking new experiences and maintains your passion and curiosity for life.",
    },
    {
      type: "Stable",
      title: "You value a comfortable and familiar environment!",
      name: "Stable Type",
      desc: "You have a tendency to value a stable lifestyle, enjoying living in a comfortable and familiar environment and considering a daily routine important. This tendency helps you pursue a sense of security and perform your best in predictable situations. You maintain your own rhythm within a set framework and aim for a comfortable life.",
    },
  ],
};
