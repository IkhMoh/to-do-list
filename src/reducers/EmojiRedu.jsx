const EmojiRedu = (currentEmoji, action) => {
  switch (action.type) {
    case "Save": {
      const emoji = {
        first: action.payload.newEmoji.first,
        second: action.payload.newEmoji.second,
        yas: action.payload.newEmoji.yas,
        no: action.payload.newEmoji.no,
      };
      localStorage.setItem("the_data_of_emogi", JSON.stringify(emoji));

      return emoji;
    }
    case "dataEmofromLocalStorage": {
      const Storage = JSON.parse(localStorage.getItem("the_data_of_emogi")) ?? {
        first: "👉",
        second: "👀",
        yas: "✔",
        no: "❌",
      };
      return Storage;
    }
    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
  return [];
};

export default EmojiRedu;
