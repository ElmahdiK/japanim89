interface FilterBlurProps {
  onClose: () => void;
}
export default function FilterBlur({ onClose }: FilterBlurProps) {
  return (
    <button
      type='button'
      onClick={onClose}
      className='fixed bottom-0 left-0 right-0 top-0 z-10 backdrop-blur-md'
    >
      {' '}
    </button>
  );
}
