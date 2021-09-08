const readline = require("readline");
const r1 = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

const input = (Question)=> {
    return new Promise(function(resolve,reject) {
        r1.question(Question, (answer1) => {
            try {
                resolve(answer1);
            }catch(err) {
                reject(err)
            }
        })
    })
}

const main = async () => {

    let a = await input ("A = ")
    let b = await input ("B = ")
    let arrTamp = [...a]
    let arrTamp1 = [...b]

    for(let i = 0; i < arrTamp; i++){
        console.log("a").split
    }

    for(let i = 0; i < arrTamp1; i++){
        console.log("b")
    }

    process.exit();
}

main()