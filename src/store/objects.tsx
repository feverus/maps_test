import { Objects } from './storeInterfaces'

function random(min: number, max: number) {
    return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number) {
    return Math.round(random(min, max))
}

function getRange(y: number, yMin = 30, yMax = 60, xStart = 30 ) {

    let xMin, xMax: number
    const center = (yMax + yMin)/2
    
    xMax = xStart + Math.sqrt(((yMax - yMin)/2)**2 - (y - center)**2) / 2
    xMin = xStart - Math.sqrt(((yMax - yMin)/2)**2 - (y - center)**2) / 2

    
    return({"xMin": xMin, "xMax": xMax})
}



  
export const colors = ['#dd1010', '#ff7030', '#FFFF70', '#50f040', '#60d0e0', '#3040b0', '#a030b0', '#e010a0']

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

    const yRand = random(30, 100)
    const range = getRange(yRand, 30, 100, 55)
    const xRand = random(range.xMin, range.xMax)

    const now = new Date()

    objects.push({id:index.toString(), 
                    coord: [xRand, yRand],
                    color: colors[category],
                    category: categorys[category],
                    adress: adressArr[randomInt(0, adressArr.length-1)],
                    img: `media/objects-preview/${randomInt(1, 5)}.jpg`,
                    stars: randomInt(0, 50) / 10,
                    likes: randomInt(0, 100),
                    feed: randomInt(0, 100),
                    gone: randomInt(0, 100),
                    name: names[randomInt(0, names.length-1)],
                    date: now.getTime() + randomInt(-31536000000, 31536000000),
                    ...template})    
}
