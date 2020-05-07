export async function translateMovie(translationText) {
  const API_KEY =
    "trnsl.1.1.20200507T113235Z.6b406a8b513830fe.af19f449361952cc42d43859485fbb1d3c323e11";
  const response = await fetch(
    `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${translationText}&lang=en`
  );
  const translation = await response.json();
  return translation.text[0];
}
