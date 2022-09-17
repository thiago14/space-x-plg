import { LastLaunch } from './Launches/LastLaunch';
import LaunchService from '../service/LaunchServiceInterface';
import { PastLaunch } from './Launches/PastLaunch';
import { NextLaunch } from './Launches/NextLaunch';
import { UpcomingLaunch } from './Launches/UpcomingLaunch';

type DashboardProp = {
    launchService: LaunchService
}

export function Dashboard({ launchService }: DashboardProp) {

    return (
        <main className='w-full overflow-x-hidden flex max-h-screen flex-1 flex-col items-center bg-cover bg-no-repeat' style={{ backgroundImage: 'url("https://camo.githubusercontent.com/2a2dfb8b139de852f33a0a268fad5a1bf5ed32b459f3193fe296a26eb9a54e4d/68747470733a2f2f6c6976652e737461746963666c69636b722e636f6d2f36353533352f34393138353134393132325f333766356335326534335f6b2e6a7067")'}}>
            <div className='flex flex-1 flex-col max-h-screen max-w-5xl w-full'>
                <header className='mt-4 mb-8 w-full'>
                    <h1 className='text-3xl font-bold text-white'>Lista de lançamentos</h1>
                </header>
                <section className='gap-4 grid grid-cols-2 max-h-full overflow-y-auto'>
                    <LastLaunch launchService={launchService} />
                    <NextLaunch launchService={launchService} />
                    <PastLaunch launchService={launchService} />
                    <UpcomingLaunch launchService={launchService} />
                </section>
            </div>
        </main>
    );
}