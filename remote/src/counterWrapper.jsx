import { render } from 'solid-js/web';

import './index.scss';
import Counter from './Counter';

export default function counterWrapper(el) {
  render(Counter, el);
}
