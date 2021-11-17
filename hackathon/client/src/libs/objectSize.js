export default function objectSize (object) {
    let size = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;
}