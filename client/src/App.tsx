import { Dashboard } from './components/Dashboard';
import LaunchService from './service/LaunchServiceInterface';

type AppProps = {
  launchService: LaunchService
}

function App({ launchService }: AppProps) {

  return (
    <Dashboard launchService={launchService} />
  )
}

export default App
