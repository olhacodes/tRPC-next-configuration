import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.greeting.useQuery({ greeting: 'tRPC' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.text}</p>
    </div>
  );
}
