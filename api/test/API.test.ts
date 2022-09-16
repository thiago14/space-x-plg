import axios from 'axios'

const baseUrl = 'http://localhost:3000';

async function request(url: string, method: string = 'get', data: any = null) {
    const response = await axios({
        url,
        method,
        data
    });
    return response.data;
}

test('Should return last launch', async function() {
    const launch = await request(`${baseUrl}/launches/last`, 'get');
    expect(launch.name).toBe('Starlink 4-2 (v1.5) & Blue Walker 3')
});

test('Should return last launches', async function() {
    const launches = await request(`${baseUrl}/launches/past`, 'get');
    const [launch] = launches;
    expect(launch.name).toBe('FalconSat');
});

test('Should return next launch', async function() {
    const launch = await request(`${baseUrl}/launches/next`, 'get');
    expect(launch.id).toBe('63161329ffc78f3b8567070b');
    expect(launch.name).toBe('Starlink 4-34 (v1.5)');
});

test('Should return next launches', async function() {
    const launches = await request(`${baseUrl}/launches/upcoming`, 'get');
    const [launch] = launches;
    expect(launch.id).toBe('63161329ffc78f3b8567070b');
    expect(launch.name).toBe('Starlink 4-34 (v1.5)');
});