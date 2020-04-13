const categories = [
  { title: "Actions pt. 1", name: "actions_1" },
  { title: "Actions pt. 2", name: "actions_2" },
  { title: "Animals pt. 1", name: "animals_1" },
  { title: "Animals pt. 2", name: "animals_2" },
  { title: "Clothes", name: "clothes" },
  { title: "Emotions", name: "emotions" }
];

const words = [
  [
    {
      word: "cry",
      translation: "плакать",
      imageSrc: "./src/img/word_card_img/cry.jpg",
      audio: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "танцевать",
      imageSrc: "./src/img/word_card_img/dance.jpg",
      audio: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "нырять",
      imageSrc: "./src/img/word_card_img/dive.jpg",
      audio: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "рисовать",
      imageSrc: "./src/img/word_card_img/draw.jpg",
      audio: "audio/draw.mp3",
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      imageSrc: "./src/img/word_card_img/fish.jpg",
      audio: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      imageSrc: "./src/img/word_card_img/fly.jpg",
      audio: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      imageSrc: "./src/img/word_card_img/hug.jpg",
      audio: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      imageSrc: "./src/img/word_card_img/jump.jpg",
      audio: "audio/jump.mp3",
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      imageSrc: "./src/img/word_card_img/open.jpg",
      audio: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "играть",
      imageSrc: "./src/img/word_card_img/play.jpg",
      audio: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "указывать",
      imageSrc: "./src/img/word_card_img/point.jpg",
      audio: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ездить",
      imageSrc: "./src/img/word_card_img/ride.jpg",
      audio: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      imageSrc: "./src/img/word_card_img/run.jpg",
      audio: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      imageSrc: "./src/img/word_card_img/sing.jpg",
      audio: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "пропускать, прыгать",
      imageSrc: "./src/img/word_card_img/skip.jpg",
      audio: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      imageSrc: "./src/img/word_card_img/swim.jpg",
      audio: "audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      imageSrc: "./src/img/word_card_img/cat.jpg",
      audio: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "цыплёнок",
      imageSrc: "./src/img/word_card_img/chick.jpg",
      audio: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      imageSrc: "./src/img/word_card_img/chicken.jpg",
      audio: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      imageSrc: "./src/img/word_card_img/dog.jpg",
      audio: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      imageSrc: "./src/img/word_card_img/horse.jpg",
      audio: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "свинья",
      imageSrc: "./src/img/word_card_img/pig.jpg",
      audio: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "кролик",
      imageSrc: "./src/img/word_card_img/rabbit.jpg",
      audio: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "овца",
      imageSrc: "./src/img/word_card_img/sheep.jpg",
      audio: "audio/sheep.mp3",
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      imageSrc: "./src/img/word_card_img/bird.jpg",
      audio: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "рыба",
      imageSrc: "./src/img/word_card_img/fish1.jpg",
      audio: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "жаба",
      imageSrc: "./src/img/word_card_img/frog.jpg",
      audio: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "жирафа",
      imageSrc: "./src/img/word_card_img/giraffe.jpg",
      audio: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      imageSrc: "./src/img/word_card_img/lion.jpg",
      audio: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "мышь",
      imageSrc: "./src/img/word_card_img/mouse.jpg",
      audio: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "черепаха",
      imageSrc: "./src/img/word_card_img/turtle.jpg",
      audio: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      imageSrc: "./src/img/word_card_img/dolphin.jpg",
      audio: "audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      imageSrc: "./src/img/word_card_img/skirt.jpg",
      audio: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      imageSrc: "./src/img/word_card_img/pants.jpg",
      audio: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      imageSrc: "./src/img/word_card_img/blouse.jpg",
      audio: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      imageSrc: "./src/img/word_card_img/dress.jpg",
      audio: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      imageSrc: "./src/img/word_card_img/boot.jpg",
      audio: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      imageSrc: "./src/img/word_card_img/shirt.jpg",
      audio: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      imageSrc: "./src/img/word_card_img/coat.jpg",
      audio: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      imageSrc: "./src/img/word_card_img/shoe.jpg",
      audio: "audio/shoe.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      imageSrc: "./src/img/word_card_img/sad.jpg",
      audio: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      imageSrc: "./src/img/word_card_img/angry.jpg",
      audio: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      imageSrc: "./src/img/word_card_img/happy.jpg",
      audio: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      imageSrc: "./src/img/word_card_img/tired.jpg",
      audio: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      imageSrc: "./src/img/word_card_img/surprised.jpg",
      audio: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      imageSrc: "./src/img/word_card_img/scared.jpg",
      audio: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      imageSrc: "./src/img/word_card_img/smile.jpg",
      audio: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      imageSrc: "./src/img/word_card_img/laugh.jpg",
      audio: "audio/laugh.mp3",
    },
  ],
];

export { categories, words };
