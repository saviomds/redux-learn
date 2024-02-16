import Counter from '../components/counter';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2> Redux complete tutorial</h2>
      <Counter />
    </main>
  );
}
