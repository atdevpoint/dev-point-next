import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EditProfileLinksSection from '../../components/containers/EditProfileLinksSection';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('EditProfileLinksSection', () => {
  it('renders the EditProfileLinksSection component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EditProfileLinksSection />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
