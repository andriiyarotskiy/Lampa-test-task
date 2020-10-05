export const fakeState = [
    {
        title: 'HTML',
        description: "Lorem ipsum dolor sit amet.",
        price: 20,
        id: '1',
        image: "https://source.unsplash.com/random"
    },
    {
        title: 'CSS',
        description: "Lorem ipsum dolor sit amet.",
        price: 30,
        id: '2',
        image: "https://source.unsplash.com/random"
    },
    {
        title: 'REDUX',
        description: "Lorem ipsum dolor sit amet.",
        price: 40,
        id: '3',
        image: "https://source.unsplash.com/random"
    },
    {
        title: 'REDUX-THUNK',
        description: "Lorem ipsum dolor sit amet.",
        price: 50,
        id: '4',
        image: "https://source.unsplash.com/random"
    },
    {
        title: 'REACT',
        description: "Lorem ipsum dolor sit amet.",
        price: 100,
        id: '5',
        image: "https://source.unsplash.com/random"
    },
    {
        title: 'ROUTER',
        description: "Lorem ipsum dolor sit amet.",
        price: 200,
        id: '6',
        image: "https://source.unsplash.com/random"
    },
]


export const fakeApi = {
    getProducts: () => {
        return new Promise((res) => { // get
            setTimeout(() => {
                return res(fakeState)
            }, 1000)
        })
    },
    sendingAnOrder: (order: any) => {
        return new Promise((res) => { // post
            setTimeout(() => {
                console.log(order) // body
                return res('Order accepted!, look in сonsole')
            }, 2000)
        })
    }
}