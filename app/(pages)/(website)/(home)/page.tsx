import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>this is our app home</h1>
       <Image
       src='/assets/images/logo.png'
         width='200'
         height='200'
         alt='logo'
       />
    </main>
  );
}
