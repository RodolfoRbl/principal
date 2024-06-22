
export function getTelegramMessage (message) {
return {
  update_id: Math.floor(Math.random() * 1000000),
  message: {
    message_id: Math.floor(Math.random() * 1000000),
    from: {
      id: 458923115, // Your bot or user ID here
      is_bot: false,
      first_name: "R",
      username: "rr_01_rr"
    },
    chat: {
      id: 458923115, // Your chat ID here
      first_name: "R",
      username: "rr_01_rr",
      type: "private"
    },
    date: Math.floor(Date.now() / 1000),
    text: message,
  }
}
}



export function getTelegramCommand (command) {
  let aux = getTelegramMessage('/' + command);
  aux.message.entities =  [
    {
      offset: 0,
      length: 6,
      type: "bot_command"
    }
  ]
  return aux
}