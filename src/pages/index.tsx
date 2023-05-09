import { Helmet } from '@/components/Helmet';
import { HomePage } from '@/views/Home';

export default function Home() {
  return (
    <>
      <Helmet />
      <HomePage />
    </>
  );
}
