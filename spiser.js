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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
