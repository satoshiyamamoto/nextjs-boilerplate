import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function Hello() {
  const { data, error } = useSWR('/api/report', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
