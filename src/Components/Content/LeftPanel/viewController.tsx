import { up } from 'Common/Scripts'


export function AnimateLeftPanel(item:HTMLLIElement) {
    const menu = up(item, '.navMenu')[0]
    const navBackItem = menu.querySelector('#navBack') as HTMLElement
    navBackItem.style.top = `${item.offsetTop - 15}px`
}