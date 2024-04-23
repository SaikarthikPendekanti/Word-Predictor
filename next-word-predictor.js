const input = document.getElementById('sentenceInput');
const recommendationsDiv = document.getElementById('recommendations');

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango',
               'and','or','but','as','although','when','because','thus','for example','so','although','therefore',
               'Dove','Pigeon','Pelican','Crow','Vulture','Crane','Hummingbird','Woodpecker','Owl','Cuckoo','Turkey','Ostrich','Swallow','Falcon','Sparrow','Goose','Coot','Peacock','Duck','Hawk','Myna','Kiwi',
               'Lion','Tiger','Elephant','Giraffe','Zebra','Kangaroo','Koala','Penguin','Dolphin','Shark','Gorilla','Hippopotamus','Rhinoceros','Crocodile','Camel',
               'Vishnu','SaiKarthik','Alex','Jamie','Jordan','Taylor','Casey','Morgan','Drew','Avery','Cameron','Jamie','Blair','Dakota','Jesse','Taylor','Avery','Hayden','Riley','Sidney','Morgan','Logan',
               'India','Chennai','Mumbai','Delhi','Goa','New York','Los Angeles', 'California','Chicago', 'Illinois','Houston','Phoenix', 'Arizona','Philadelphia','Pennsylvania','San Antonio','San Diego','Dallas','San Jose','Austin', 'Texas','Jacksonville', 'Florida','Fort Worth', 'Texas','Columbus', 'Ohio','San Francisco', 'California','Charlotte', 'North Carolina','Indianapolis', 'Indiana','Seattle','Denver', 'Colorado','Washington D.C',
               'Beautiful','Tasty','Engrossing','Captivating','Gripping','Fantastic','Propitious','Remarkable','Breathtaking','Splendid','Luxurious','Stupendous','Upbeat','Stunning','Astonishing','Marvelous','Wonderful','Brave','Considerate','Adept','Alluring','Ample',
               'Hello','Hi','Hey','Good morning','Good afternoon','Good evening','Greetings','Salutations','How do you do?','How are you?','How is it going?','Whats up?','How is life?','Good to see you','Good to meet you','Nice to meet you','Long time no see','Welcome back','Happy to see you','Pleasure to meet you',
               'To','be','have','do','say','get','make','go','know','take','see','come','think','look','want','use','find','give','tell','work','call',
            ];
const fuse = new Fuse(words, { keys: ['0'] });

input.addEventListener('input', () => {
  const inputValue = input.value.toLowerCase();
  const filteredWords = fuse.search(inputValue);

  let recommendationsHtml = '';
  filteredWords.forEach(word => {
    recommendationsHtml += <p>${word.item}</p>;
  });

  recommendationsDiv.innerHTML = recommendationsHtml;
});

recommendationsDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'P') {
    input.value = event.target.textContent;
    recommendationsDiv.innerHTML = '';
  }
});