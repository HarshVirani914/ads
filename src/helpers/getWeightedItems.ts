export type WeightedItem<T> = { value: T; weight: number };

export function getWeightedItems<T>(
  items: WeightedItem<T>[],
  k: number
): WeightedItem<T>[] {
  const reservoir: WeightedItem<T>[] = [];

  // fill reservoir with the first k items
  for (let i = 0; i < k; i++) {
    reservoir[i] = items[i];
  }

  // select remaining items with decreasing probability
  for (let i = k; i < items.length; i++) {
    const item = items[i];
    const j = Math.floor(Math.random() * (i + 1));

    if (j < k) {
      reservoir[j] = item;
    }
  }

  return reservoir;
}

// function weightedRandomIndex<T>(
//   length: number,
//   weight: (index: number) => number,
//   exclude: WeightedItem<T>[]
// ): number {
//   let totalWeight = 0;
//   let excludeWeight = 0;

//   for (let i = 0; i < length; i++) {
//     totalWeight += weight(i);

//     if (exclude.includes(i)) {
//       excludeWeight += weight(i);
//     }
//   }

//   const remainingWeight = totalWeight - excludeWeight;
//   const rand = Math.random() * remainingWeight;

//   let weightSum = 0;
//   for (let i = 0; i < length; i++) {
//     if (!exclude.includes(i)) {
//       weightSum += weight(i);
//       if (rand < weightSum) {
//         return i;
//       }
//     }
//   }

//   return -1; // should not happen
// }
