const randInt = (max = 83, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1));
}

function formatImageData (photo) {
  const newPhoto = {
    id: photo.id,
    category: randInt(5, 1),
    photo: `https://picsum.photos/id/${photo.id}/600/600`,
    title: photo.author
  }
  return newPhoto;
}

async function fetchPhotoList() {
  const url = `https://picsum.photos/v2/list?page=${randInt()}&limit=12;`
  const response = await fetch(url);
  const json = await response.json();
  return json.map(formatImageData);
}

export default fetchPhotoList;