import LaunchServiceInterface from  '../../service/LaunchServiceInterface';
import { useEffect, useState } from 'react';
import Launch from '../../domain/entity/Launch';

type NextLaunchProps = {
  launchService: LaunchServiceInterface
}

export function NextLaunch({ launchService }: NextLaunchProps) {
  const [data, setData] = useState<Launch | null>(null);

  useEffect(() => {
      launchService.getNext()
        .then(response => {
          setData(response);
        });

  }, []);

  return (
    <article className='card'>
    <h3 className='title'>Próximo lançamento</h3>
      <div className='text-white'>
        <h4><span className='font-bold'>Nome:</span> {data?.name}</h4>
        <p><span className='font-bold'>Data:</span> {data?.date_lcoal}</p>
        <p><span className='font-bold'>Detalhe:</span> {data?.details}</p>
      </div>
    </article>
  );
}