import { Objects } from './storeInterfaces'

function random(min: number, max: number) {
    return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number) {
    return Math.round(random(min, max))
}
  
const colors = ['#dfa9b6', '#C3A3E9', '#C6E7E6', '#6d5ef1', '#91A5B3', '#f0ee76', '#7BE0C6', '#E6C6E7']

export const categorys = ['Работа в хостеле', 'Работа на ферме', 'Работа с животными', 'Преподавание', 'Работа с детьми', 'Благотворительность', 'Спорт', 'Искусство', 'Другое...']

const adressArr = ['Москва, Россия', 'Санкт-Петербург, Россия', 'Тбилиси, Грузия']

const names = ['Работа в заповеднике Лен. область', 'Приют животных в Петербурге', 'Приют для бездомных животных', 'Помощь бездомным животным', 'Зоопарк принимает добровольцев', 'Волонтёры в питомник']

const template = {
    description: 'Шаблонное описание работы в приюте. Приглашаем вас поддержать наш проект. Если Вы любите животных, то мы Вас ждём. Если вы хороший сотрудник то мы вас не отпустим.',
}

export const objects:Objects = [];

const countMockData = randomInt(1000, 2000)

for (let index = 0; index < countMockData; index++) {
    const category = randomInt(0, colors.length-1)
    objects.push({id:index.toString(), 
                    coord: [random(55, 60), random(30, 40)],
                    color: colors[category],
                    category: categorys[category],
                    adress: adressArr[randomInt(0, adressArr.length-1)],
                    img: `media/objects-preview/${randomInt(1, 5)}.jpg`,
                    stars: randomInt(0, 50) / 10,
                    likes: randomInt(0, 100),
                    feed: randomInt(0, 100),
                    gone: randomInt(0, 100),
                    name: names[randomInt(0, names.length-1)],
                    ...template})    
}
