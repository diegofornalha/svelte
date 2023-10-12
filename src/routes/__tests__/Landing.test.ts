import { render } from '@testing-library/svelte';
import Landing from '../Landing.svelte';

describe('Landing page', () => {
  it('should render without crashing', () => {
    const { container } = render(Landing);
    expect(container).toBeTruthy();
  });
});
