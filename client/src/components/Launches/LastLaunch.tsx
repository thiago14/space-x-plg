import LaunchServiceInterface from  '../../service/LaunchServiceInterface';
import { useEffect, useState } from 'react';
import Launch from '../../domain/entity/Launch';

type LastLaunchProps = {
  launchService: LaunchServiceInterface
}

export function LastLaunch({ launchService }: LastLaunchProps) {
  const [data, setData] = useState<Launch | null>(null);

  useEffect(() => {
      launchService.getLast()
        .then(response => {
          setData(response);
        });

  }, []);

  return (
    <article className='card'>
      <h3 className='title'>Último lançamento</h3>
      <div className='text-white'>
        <h4><span className='font-bold'>Nome:</span> {data?.name}</h4>
        <p><span className='font-bold'>Data:</span> {data?.date_lcoal}</p>
        <p><span className='font-bold'>Detalhe:</span> {data?.details}</p>
      </div>
    </article>
  );
}