import getGif from '../helpers/getGif';

const GifGrid = ({ category }) => {
  getGif(category);
  return (
    <div>
      <h3>{category}</h3>
      <p>{category}</p>
    </div>
  )
}

export default GifGrid;
