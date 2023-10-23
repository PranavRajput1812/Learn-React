function customRender(reactElemet,container){
    // const domElement = document.createElement(reactElemet.type)

    // domElement.innerHTML = reactElemet.children
    // domElement.setAttribute('href',reactElemet.props.href)
    // domElement.setAttribute('href',reactElemet.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElemet.type)

    domElement.innerHTML = reactElemet.children
    for (const prop in reactElemet.props) {
        if (prop==='children') continue
        domElement.setAttribute(prop,reactElemet.props[prop])
    }
    container.appendChild(domElement);
}


const reactElemet ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'

}
const maincontainer = document.querySelector('#root')

customRender(reactElemet,maincontainer)
