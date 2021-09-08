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

    let n = await input ("")

    for(let i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            if(i == 1 || i == n || j == n - i + 1 || i == j || j == n){
                console.log("*")
            } else {
                console.log(" ")
            }
        } console.log("\\n")
    }

    process.exit();
}

main()