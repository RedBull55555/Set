import Team from '../team';

describe('Team class', () => {
  let team;
  const char1 = { name: 'Archer' };
  const char2 = { name: 'Mage' };

  beforeEach(() => {
    team = new Team();
  });

  test('add unique character', () => {
    team.add(char1);
    expect(team.toArray()).toEqual([char1]);
  });

  test('add duplicate character should throw', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Character already in team');
  });

  test('addAll with duplicates should not throw', () => {
    team.addAll(char1, char2, char1);
    expect(team.toArray()).toEqual(expect.arrayContaining([char1, char2]));
    expect(team.toArray().length).toBe(2);
  });

  test('toArray returns array', () => {
    team.addAll(char1, char2);
    const result = team.toArray();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(expect.arrayContaining([char1, char2]));
  });
});
