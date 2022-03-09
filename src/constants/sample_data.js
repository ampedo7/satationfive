const sampleData = {
  dishes: [
    { id: '101', value: 'Vegetarian' },
    { id: '102', value: 'Nut allergy' },
    { id: '103', value: 'Halal' },
  ],
  main: [
    { id: '201', value: 'Cashew chicken', isActive: false },
    { id: '202', value: 'Sweet and sour pork', isActive: false },
    { id: '203', value: 'Stir fried Tofu', isActive: false },
    { id: '204', value: 'Vegetable fried rice', isActive: false },
    { id: '205', value: 'Pad Thai', isActive: false },
    { id: '206', value: 'Massaman beef', isActive: false },
  ],
  sides: [
    { id: '301', value: 'Peanut sauce', isActive: false },
    { id: '302', value: 'Oyster sauce', isActive: false },
    { id: '303', value: 'Vegetable spring rolls', isActive: false },
    { id: '304', value: 'Steamed rice', isActive: false },
  ],
  rules: [
    // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
    { id: '101', value: [201, 202, 206, 302] },
    // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
    { id: '102', value: [201, 301] },
    // // 'Halal' is NOT compatible with 'Sweet and sour pork',
    { id: '103', value: [202] },
    // // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
    { id: '204', value: [304] },
    // // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
    { id: '205', value: [304] },
  ],
};

export default sampleData;
