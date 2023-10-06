export const scrollLeft = (id, x) => {
    const container = document.getElementById(id);
    container.scrollLeft -= container.offsetWidth / x;

}

export const scrollRight = (id, x) => {
    const container = document.getElementById(id);
    container.scrollBy(container.offsetWidth / x, 0);

}