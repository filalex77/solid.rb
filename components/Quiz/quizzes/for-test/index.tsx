import * as React from 'react'
import { IQuiz } from '../IQuiz'
import Variant1 from './variants/1-text.mdx'
import Description1 from './variants/1-description.mdx'

const Quiz: IQuiz = {
  name: 'for-test',
  question: 'В чём главная причина того, что выбор формата данных вынесен в отдельный класс?',
  variants: [
    {
      text: <Variant1 />,
      description: <Description1 />
    },
    {
      text:
        'Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо труднее',
      description:
        'Да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту'
    },
    {
      text:
        'Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора формата производится в одном месте',
      description:
        'Да, но это следствие основной причины — выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль'
    }
  ],
  meta: {
    correctAnswers: [0]
  }
}

export default Quiz