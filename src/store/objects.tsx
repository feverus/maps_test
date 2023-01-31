import { Objects } from '../components/pages/showObjectsContent/showObjectsContent.props'

function random(min: number, max: number) {
    return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number) {
    return Math.round(random(min, max))
}
  
const colors = ['#E3C2CA', '#C3A3E9', '#C6E7E6', '#C6E7E6', '#91A5B3', '#E0EBC6', '#7BE0C6', '#E6C6E7']
export const categorys = ['Работа в хостеле', 'Работа на ферме', 'Работа с животными', 'Преподавание', 'Работа с детьми', 'Благотворительность', 'Спорт', 'Искусство', 'Другое...']
const adressArr = ['Москва, Россия', 'Санкт-Петербург, Россия', 'Тбилиси, Грузия']

const template = {
    name: 'Приют для бездомных животных',
    description: 'Шаблонное описание работы в приюте. Приглашаем вас поддержать наш проект. Если Вы любите животных, то мы Вас ждём. Если вы хороший сотрудник то мы вас не отпустим.',
}

export const objects:Objects = [];

for (let index = 0; index < 100; index++) {
    const category = randomInt(0, colors.length-1)
    objects.push({id:index.toString(), 
                    coord: [random(55, 60), random(30, 40)],
                    color: colors[category],
                    category: categorys[category],
                    adress: adressArr[randomInt(0, adressArr.length-1)],
                    img: `media/objects-preview/${(1 + index % 5)}.jpg`,
                    stars: randomInt(0, 50) / 10,
                    likes: randomInt(0, 100),
                    feed: randomInt(0, 100),
                    gone: randomInt(0, 100),
                    ...template})    
}
