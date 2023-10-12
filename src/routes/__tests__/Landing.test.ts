import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Landing from '../Landing.svelte';

// Mock de window.location
delete window.location;
window.location = { ...window.location, pathname: '/' };

describe('Landing page', () => {
  it('should navigate to login page when button is clicked', async () => {
    render(Landing);

    const button = screen.getByText('CAIR PRA DENTRO! 👋');
    await userEvent.click(button);

    expect(window.location.pathname).toBe('/login');
  });
});
