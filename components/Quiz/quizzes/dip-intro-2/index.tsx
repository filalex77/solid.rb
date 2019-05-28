import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'dip-intro-2',
  question: 'Для устойчивой системы характерны:',
  variants: [
    {
      text: 'Низкое сцепление, высокая связность'
    },
    {
      text: 'Низкое сцепление, низкая связность'
    },
    {
      text: 'Высокое сцепление, низкая связность'
    },
    {
      text: 'Высокое сцепление, высокая связность',
      description:
        'Сцепление — степень взаимозависимости разных модулей. Чем она выше, тем более хрупкой получается система. Связность — степень, в которой задачи некоторого модуля, связаны друг с другом. Чем ниже связность, тем выше сфокусирован модуль на конкретной задаче'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

export default quiz