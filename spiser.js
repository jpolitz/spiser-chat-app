const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

chats = [
    "Joe says hi",
    "Another test"
];

app.get('/', (request, response) => {
    chatString = "";
    for(var c of chats) {
        chatString += c + "\n";
    }
    response.send(chatString);
});

app.get('/chat/', (request, response) => {
    thisChat = request.params["message"];
    console.log("Someone loaded /chat with ", request.params);
    chats.push(thisChat);
    response.send("Thank you for your chat");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
