import { Categoria } from "../interfaces/categoria";

export const CATEGORIA: Categoria[] = [
    {
        nombre: 'Hamburguesas',
        id: 0,
        imgUrl: 'https://chefeel.com/chefgeneralfiles/2021/07/front-view-burger-on-stand-scaled.jpg',
        productos: [
        {
            id: 1,
            nombre: 'Cheese burguer',
            precio: 3400,
            ingredientes: ['doble carne, cheddar, panceta'],
            imagen:'https://img.freepik.com/free-photo/grilled-gourmet-cheeseburger-rustic-wooden-table-generated-by-ai_188544-25131.jpg?w=2000'
        },
        {
            id:2,
            nombre: 'Big mac',
            precio: 3500,
            ingredientes: ['doble carne, pepino, cheddar, lechuga'],
            imagen: 'https://www.baenegocios.com/__export/1611930467397/sites/cronica/img/2021/01/29/big_mac.jpg_1402874324.jpg'
        },
        {
            id: 3,
            nombre: 'Blue cheese',
            precio: 3350,
            ingredientes: ['doble carne, roquefort, panceta, cebolla caramelizada'],
            imagen: 'https://www.orwhateveryoudo.com/wp-content/uploads/2021/03/Snake-River-Farms-Bacon-Bleu-Burgers-02.jpg'
        },
        {
            id:4,
            nombre: 'Classic',
            precio: 3400,
            ingredientes: ['doble carne, cheddar, tomate, lechuga, pepino'],
            imagen: 'https://www.eleconomista.com.mx/__export/1691758753193/sites/eleconomista/img/2023/08/11/whatsapp_image_2023-08-11_at_06_55_28_2.jpeg_20896917.jpeg'
        },
    ]
    },
    {
        nombre: 'Pizzas',
        id: 1,
        imgUrl: 'https://recetinas.com/wp-content/uploads/2017/09/pizza-de-chorizo.jpg',
        productos: [
            {
                id:5,
                nombre: '4 quesos',
                precio: 5500,
                ingredientes: ['salsa de tomate, roquefort, mozzarella, parmesano'],
                imagen:'https://www.cocinatis.com/archivos/202207/CTIS0093-receta-pizza-cuatro-quesos_B3N6zYV_large_16x9.jpg'
            },
            {
                id:6,
                nombre: 'Fugazzeta',
                precio: 5350,
                ingredientes: ['salsa de tomate, mozzarella, cebolla'],
                imagen: 'https://assets.unileversolutions.com/recipes-v2/210361.jpg'
            },
            {
                id:7,
                nombre: 'Pepperoni',
                precio: 5400,
                ingredientes: ['salsa de tomate, mozzarella, pepperoni'],
                imagen: 'https://media.istockphoto.com/id/521403691/es/foto/casera-con-opciones-fr%C3%ADas-y-calientes-y-pizza-de-chorizo.jpg?s=612x612&w=0&k=20&c=e65G7OWoYUXnSWFDRKgt4Ga82vw76RaLUQ1AGvsutJw='
            },
            {
                id:8,
                nombre: 'Pollo',
                precio: 5600,
                ingredientes: ['salsa de tomate, mozzarella, pollo, pimiento'],
                imagen: 'https://assets.kraftfoods.com/recipe_images/opendeploy/136150_640x428.jpg'
            },
        ]
    },
    {
        nombre: 'Postres',
        id: 2,
        imgUrl: 'https://www.hogarmania.com/archivos/202207/postres-frios-xl-1280x720x80xX.jpg',
        productos: [
            {
                id:9,
                nombre: 'Brownie',
                precio: 2500,
                ingredientes: ['brownie con helado de americana y salsa de chocolate'],
                imagen:'https://i.pinimg.com/1200x/82/48/2f/82482f008093a96d97635468b7dcdef2.jpg'
            },
            {
                id:10,
                nombre: 'Volcan chocolate',
                precio: 2200,
                ingredientes: ['volcan de chocolate amargo con frutillas'],
                imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/06/volcandechocolate.jpg'
            },
            {
                id:11,
                nombre: 'Flan',
                precio: 1500,
                ingredientes: ['flan con dulce de leche y crema'],
                imagen: 'https://media.airedesantafe.com.ar/p/bde8c4a218dc908ab7271086d11eb9d9/adjuntos/268/imagenes/002/798/0002798934/spng.png?0000-00-00-00-00-00'
            },
            {
                id:12,
                nombre: 'Helado',
                precio: 1650,
                ingredientes: ['helado de dulce de leche con salsa de dulce de leche'],
                imagen: 'https://img.freepik.com/fotos-premium/tazon-vidrio-helado-bocha-helado-vaso-cerveza-detras_737761-1232.jpg?w=2000'
            },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 3,
        imgUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b',
        productos: [
            {
                id:13,
                nombre: 'Limonada',
                precio: 1000,
                ingredientes: ['limon, menta y jengibre'],
                imagen:'https://photos.demandstudios.com/getty/article/88/183/87606948.jpg'
            },
            {
                id:14,
                nombre: 'Limonada frutos rojos',
                precio: 1100,
                ingredientes: ['frutos rojos, limon, arandanos,'],
                imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/05/limonada-de-frutos-rojos.jpg'
            },
            {
                id:15,
                nombre: 'Limonada maracuya',
                precio: 1250,
                ingredientes: ['maracuya, lima, limon, menta'],
                imagen: 'https://img.freepik.com/fotos-premium/limonada-verde-maracuya-congelada-verano_1112-6818.jpg?w=2000'
            },
            {
                id:16,
                nombre: 'Coca cola',
                precio: 900,
                ingredientes: [],
                imagen: 'https://t2.uc.ltmcdn.com/es/posts/1/7/9/cuanto_engorda_la_coca_cola_descubre_aqui_la_respuesta_45971_600.jpg'
            },
        ]
    },
]