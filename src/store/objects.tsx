import { Objects } from './storeInterfaces'

function random(min: number, max: number) {
    return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number) {
    return Math.round(random(min, max))
}

function getRange(x: number, xMin = 50, xMax = 100, yStart = 30 ) {
    if (x < xMin || x > xMax) x = xMin

    const k = (xMax - xMin) / 4.2
    const xNorm = (((xMax + xMin) / 2) - x) / k
    let yMin, yMax: number
    
    console.log(xNorm)

    switch (true) {
        case xNorm < -1.755:
            yMax = Math.sqrt(5 - xNorm^2)
            break;
        case xNorm < -0.45:
            yMax = 1 + 1/8 * xNorm^2
            break;
        case xNorm < 0.45:
            yMax = 1.4 + 0.1 * (xNorm * 8 * Math.sin(xNorm * 8))^3
            break;
        case xNorm < 1.755:
            yMax = 1 + 1/8 * xNorm^2
            break;
        default:
            yMax = Math.sqrt(5 - xNorm^2)
            break;
    }
    switch (true) {
        case xNorm < -1.58:
            yMin = -1 * Math.tan(xNorm + 1) * (xNorm + 1.5)^2
            break;
        case xNorm < -0.8:
            yMin = Math.sqrt(Math.cos(xNorm * 4 - 1.6)) / 2
            break;
        case xNorm < 0:
            yMin = Math.sqrt(Math.cos(xNorm * 4 + 1.6)) / 2
            break;
        case xNorm < 0.8:
            yMin = Math.sqrt(Math.cos(xNorm * 4 - 1.6)) / 2
            break;    
        case xNorm < 1.6:
            yMin = Math.sqrt(Math.cos(xNorm * 4 + 1.6)) / 2
            break;
        default:
            yMin = Math.tan(xNorm - 1) * (xNorm - 1.5)^2
            break;
    }

    return({"yMin": yStart + yMin * k, "yMax": yStart + yMax * k})
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

    const xRand = random(50, 80)
    const range = getRange(xRand, 49.99, 80.99, 30)
    const yRand = random(range.yMin, range.yMax)

    objects.push({id:index.toString(), 
                    coord: [yRand, xRand],
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
