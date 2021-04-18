const translateEnglishToMinion = async () => {
  const english = document.getElementById("eng-text").value;
  const englishEncoded = encodeURIComponent(english);
  const url = `https://api.funtranslations.com/translate/minion.json?text=${englishEncoded}`;
  const minion = await fetch(url)
    .then(res => res.json())
    .then(data => data.contents.translated)
    .catch(err => console.error(err))
  document.getElementById("minion-text").value = minion;
}