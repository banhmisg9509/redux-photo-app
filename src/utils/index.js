export const randInt = (max = 83, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1));
}

export const formatImageData = (photo) => {
  return {
    id: photo.id,
    category: randInt(5, 1),
    photo: `https://picsum.photos/id/${photo.id}/600/600`,
    title: photo.author
  }
}