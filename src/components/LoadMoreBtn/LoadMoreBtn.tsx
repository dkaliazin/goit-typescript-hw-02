import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps{
  onClick : () => void
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.loadbtn}>
      Load more
    </button>
  )
}
export default LoadMoreBtn;
/*
export default function LoadMoreBtn({ onClick }) {
 return (
    <button onClick={onClick} className={css.loadbtn}>
      Load more
    </button>
  );
}
  */