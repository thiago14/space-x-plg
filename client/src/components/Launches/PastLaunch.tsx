import LaunchServiceInterface from  '../../service/LaunchServiceInterface';
import { useEffect, useState } from 'react';
import Launch from '../../domain/entity/Launch';

type PastLaunchProps = {
  launchService: LaunchServiceInterface
}

export function PastLaunch({ launchService }: PastLaunchProps) {
  const [data, setData] = useState<Launch[] | null>(null);

  useEffect(() => {
      launchService.getLastList()
        .then(response => {
          setData(response);
        });

  }, []);

  return (
    <article className='card overflow-auto max-h-full'>
      <h3 className='title'>Últimos lançamentos</h3>
      <ul className='text-white'>
        {data?.map(launch => (
          <li key={launch.id} className="mb-3">
            <h4><span className='font-bold'>Nome:</span> {launch.name}</h4>
            <p><span className='font-bold'>Data:</span> {launch.date_lcoal}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}