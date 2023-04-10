export const Button = ({ onClick, isNeeded }) => {
  return (
    <>
      <button type="button" onClick={onClick} className="Button">
        {isNeeded === 'true' && 'Load more'}
      </button>
    </>
  );
};
