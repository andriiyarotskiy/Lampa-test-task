import img1 from "../assets/images/products/i3-removebg-preview 1.svg"
import img2 from "../assets/images/products/Clorfit Nav.svg"
import img3 from "../assets/images/products/SE.svg"
import img4 from "../assets/images/products/noise fit.svg"
import img5 from "../assets/images/products/series 6.svg"
import img6 from "../assets/images/products/noise pro 2.svg"


export const fakeState = [
    {
        title: 'Smart Watches',
        description: "Waterproof Sport Smart Watch Monitor for IOS and Android",
        price: 20,
        id: '1',
        image: img1
    },
    {
        title: 'CSS',
        description: "Apple Watch Series 6 (40mm + GPSCellular)  Navy Sport Band",
        price: 30,
        id: '2',
        image: img2
    },
    {
        title: 'REDUX',
        description: "Apple Watch Series 3 (42mm + GPS) White Sport Band",
        price: 40,
        id: '3',
        image: img3
    },
    {
        title: 'REDUX-THUNK',
        description: "Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black",
        price: 50,
        id: '4',
        image: img4
    },
    {
        title: 'REACT',
        description: " Noise NoiseFit Evolve Full Touch Control with AMOLED Display",
        price: 100,
        id: '5',
        image: img5
    },
    {
        title: 'ROUTER',
        description: "Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green",
        price: 200,
        id: '6',
        image: img6
    },
    {
        title: 'Smart Watches',
        description: "Waterproof Sport Smart Watch Monitor for IOS and Android",
        price: 300,
        id: '7',
        image: img1
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