const answerBlock = document.querySelector('.resposta');

function getAnswer() {
    const answers = [
      'sim.',
      'não.',
      'provavelmente.',
      'com certeza!',
      'hmmmmmm, será?',
      'o que você acha?',
      'acredite nos seus sonhos Kappa',
      'vou ver e te aviso...',
      'só tem um jeito de saber...',
      'não conte com isso',
      'é sério que você tá me perguntando isso?',
      'eu gostaria de saber...',
      'minha resposta vai mudar em algo?',
      'é uma questão deveras confusa...',
      'impossível.',
      'que pergunta, hein?',
      'duvido muito.',
      'não acredito nisso.',
      'nem que o panda urre.',
      'em breve.',
      'a resposta está na sua pergunta.',
      '42',
      'essa é muito fácil, pergunta outra...'
    ];

    const answersCount = answers.length;
    const randomAnswerIndex = Math.floor(Math.random() * answersCount);  
    answerBlock.innerHTML = `${answers[randomAnswerIndex]} `;
}





