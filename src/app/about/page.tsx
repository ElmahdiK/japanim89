import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col text-center'>
      <div className='mt-10'>
        <span className='mb-100 block p-10 text-6xl font-bold capitalize'>
          about
        </span>
      </div>
      <br />
      <Link href='./'>Go to home page</Link>
    </div>
  );
}
