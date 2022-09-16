import Launch from '../src/domain/entity/Launch';

test('Should return a launch', function() {
    const launch = new Launch(
        '5eb87d42ffd86e000604b384',
        'CRS-20',
        "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
        '2020-03-06T23:50:31-05:00'
    );
    expect(launch.name).toBe('CRS-20');
    expect(launch.id).toBe('5eb87d42ffd86e000604b384');
});