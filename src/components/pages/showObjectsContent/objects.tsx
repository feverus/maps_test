import { Objects } from './showObjectsContent.props'

function random(min: number, max: number) {
    return min + Math.random() * (max - min);
}
  
const colors = ['#E3C2CA', '#C3A3E9', '#C6E7E6', '#C6E7E6', '#91A5B3', '#E0EBC6', '#EBE0C6', '#E6C6E7']

const template = {
    name: 'Приют для бездомных животных',
    adress: 'Москва, Россия',
    category: '',
    stars: 1,
    likes: 5,
    feed: 10,
    gone: 100,
    description: 'Шаблонное описание работы в заповеднике.',
}

const objects:Objects = [
    {
        id: '0',
        name: 'Работа в заповеднике Лен. область',
        adress: 'Санкт-Петербург, Россия',
        coord: [59.938955, 30.315644],
        category: 'Заповедники и нац. парки',
        stars: 4.3,
        likes: 10,
        feed: 20,
        gone: 50,
        description: 'Один уникальный тестовый объект с нешаблонным описанием работы в заповеднике.',
        color: '#117711',
    },
];

for (let index = 0; index < 100; index++) {
    objects.push({id:index.toString(), 
                    coord: [random(55, 60), random(30, 40)],
                    color: colors[Math.round(random(0, colors.length-1))],
                    ...template})    
}


export default objects