const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

// 예제 작성
// '/' -> 라우팅, 이동할 주소

app.get('/dog', function (req, res) {
    res.send('<h1>강아지</h1>')
})
app.get('/cat', function (req, res) {
    res.json({'sound':'야옹'})
})

app.listen(3000)