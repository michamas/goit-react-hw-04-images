export const Button = ({ onClick, isNeeded }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {isNeeded === 'true' && 'Load more'}
      </button>
    </>
  );
};
