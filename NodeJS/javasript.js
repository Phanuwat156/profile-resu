
const url1="miw.dev/file1.json"
const url2="miw.dev/file2.json"
const url3="miw.dev/file3.json"

// กด Alt + 96 จะได้ ``
function downloadind(url,callback) {
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    setTimeout(() =>{
        callback(url)
    },1000)
} 

downloadind(url1,function(result) {
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
    downloadind(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อยฃ!`)
        downloadind(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
        })
    })
})