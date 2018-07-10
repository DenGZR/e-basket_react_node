export const getOrders = (req, res, next) => {
    console.log('getOrders!!!');
    res.status(200).json({
        data: [{
            id: '484879834298',
            title: 'Конструктор',
            imgSrc: 'http://divoland.dp.ua/prodimages/normal/e2/BOC060766.jpg',
            description: 'Конструктор 1717 PP, фигурка, на подставке, карточки 3шт, 8 видов, в кор-ке, 8-13,5-4см'
        },{
            id: '468979834298',
            title: 'Конверт для коштiв "Арт-Презент"',
            imgSrc: 'http://divoland.dp.ua/prodimages/normal/3a/DPK006415.jpg',
            description: 'Конструктор 1717 PP, фигурка, на подставке, карточки 3шт, 8 видов, в кор-ке, 8-13,5-4см'
        }]
    })
}