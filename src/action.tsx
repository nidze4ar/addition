const ADDITION: string = 'ADDITION'
 
const add = (a: number, b: number) => ({
  type: ADDITION,
  a, b
})


export default add