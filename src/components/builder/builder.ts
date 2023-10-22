export const openBuilder = () => {
    const modal = document.getElementsByClassName('builder')[0]
    modal.classList.remove('hidden')
    modal.classList.add('show')

    // TODO (should be moved to state property)
    const buttonOpenBuilder = document.getElementById('openBuilder')!
    buttonOpenBuilder.hidden = true
}
export const closeBuilder = () => {
    const modal = document.getElementsByClassName('builder')[0]
    modal.classList.remove('show')
    modal.classList.add('hidden')
}