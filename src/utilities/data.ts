// https://stackoverflow.com/a/5915122/1718155
/** *
* take a random element from a list
* @para items any kind of list
* @returns one randomly chosen element
*/

export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}