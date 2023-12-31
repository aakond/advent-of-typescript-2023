import { Expect, Equal } from '../utils/utils';


type Forest0 = [
    ['🎅🏼', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  type test_0_actual = FindSanta2Dimension<Forest0>;
  type test_0_expected = [0, 0];
  type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;
  
  type Forest1 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎅🏼', '🎄', '🎄'],
  ];
  type test_1_actual = FindSanta2Dimension<Forest1>;
  type test_1_expected = [3, 1];
  type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
  
  type Forest2 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎅🏼', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  type test_2_actual = FindSanta2Dimension<Forest2>;
  type test_2_expected = [2, 2];
  type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
  
  type Forest3 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎅🏼', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  type test_3_actual = FindSanta2Dimension<Forest3>;
  type test_3_expected = [2, 1];
  type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;
  
  type Forest4 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎅🏼', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  type test_4_actual = FindSanta2Dimension<Forest4>;
  type test_4_expected = [1, 2];
  type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;
  