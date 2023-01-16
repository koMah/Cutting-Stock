// Import stylesheets
import { greedy_algorithm } from './greedy';

let res = greedy_algorithm(
  [
    450, 444, 436, 430, 389, 389, 386, 375, 362, 130, 362, 261, 261, 261,
  ].reverse(),
  600
);

console.log(res);
