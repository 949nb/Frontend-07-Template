
const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time * 1000)
})



let index = 1
setInterval(async () => {
    console.log("滴答 " + index++)


}, 1000)


const start = async () => {
    await sleep(10)
    console.log('变黄灯')

    await sleep(2)
    console.log('变红灯')

    await sleep(5)
    console.log('变绿灯')
    index = 0
    start()
}

start()



