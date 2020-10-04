export const fakeState = [
    {title: 'HTML', description: 'some text', price: 20, id: '1'},
    {title: 'CSS', description: 'some text', price: 30, id: '2'},
    {title: 'REDUX', description: 'some text', price: 40, id: '3'},
    {title: 'REDUX-THUNK', description: 'some text', price: 50, id: '4'},
    {title: 'REACT', description: 'some text', price: 100, id: '5'},
    {title: 'ROUTER', description: 'some text', price: 200, id: '6'},
]


export const fakeApi = {
    getProducts: () => {
        return new Promise((res, rej) => { // get
            setTimeout(() => {
                return res(fakeState)
            }, 1000)
        })
    },
    sendingAnOrder: (order: any) => {
        return new Promise((res, rej) => { // post
            setTimeout(() => {
                console.log(order) // body
                return res('Order accepted!, look in сonsole')
            }, 2000)
        })
    }
}